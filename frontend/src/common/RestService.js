import axios from "axios";
import * as React from "react";

let AUTH_HEADER;
let serviceDiscovery;

let tokenToSend = ""

class RestService {

    static async getServiceLocation(serviceName, clb) {
        if (!serviceDiscovery) {
            let response;
            try {
                // Check if prod services exist, if yes use them
                response = await axios.get("services.json");
                if (response.status !== 200)
                    throw Error("Prod services.json not found. Fallback to mock services.json");
            } catch (e) {
                // Else get the mock services.
                response = await axios.get("services.mock.json");
                if (response.status !== 200) throw Error("Fallback to mock services.json failed.");
            }
            serviceDiscovery = response.data;
            if (!AUTH_HEADER) AUTH_HEADER = serviceDiscovery["dev_auth_header"];
        }

        let loc = serviceDiscovery[serviceName];
        if (!loc) loc = serviceDiscovery["default"];
        clb(loc);
    }

    static async getConfig(serviceName, clb, userHeader, responseType) {
        await RestService.getServiceLocation(serviceName, url => {
            let headers = {
                "Content-type": responseType,
                "Accept": "*/*",
                "Authorization": `Bearer ${tokenToSend}`

            };
            if (userHeader) {
                Object.keys(userHeader).map(cv => {
                    headers[cv] = userHeader[cv];
                });
            }
            if (AUTH_HEADER) headers["Authorization"] = AUTH_HEADER;
            clb({
                baseURL: url + "/" + serviceName,
                timeout: 300000,
                headers: headers,
            });
        });
    }

    static handleResponse(response, callback, errorCB = undefined) {
        switch (response.status) {
            case 401: //login page
                // toastData.addToast("Error:" + response.status, "DANGER");
                break;
            case 403: //alert
                // toastData.addToast("Error:" + response.status, "DANGER");
                break;
            case 500: //alert
                // toastData.addToast("Error:" + response.status, "DANGER");
                break;
            case 400: //alert
                // toastData.addToast("Error:" + response.status, "DANGER");
                break;
            case 200:
                if (response && response.data !== null) {
                    callback(response.data);
                }
                break;
            case 204:
                callback();
                break;
            default:
        }
    }

    static handleError(error) {
        if (error && error.response && error.response.status)
            window.alert("Error:" + error.response.status + ":-" + error.response.data);
    }

    static get(
        service,
        url,
        successCB,
        errorCB = undefined,
        data = {},
        userHeader = null,
        responseType = "application/json"
    ) {
        RestService.getConfig(
            service,
            config => {
                axios
                    .get(url, config)
                    .then(function (response) {
                        RestService.handleResponse(response, successCB, errorCB);
                    })
                    .catch(function (error) {
                        if (errorCB) {
                            RestService.handleError(error);
                            errorCB();
                        } else RestService.handleError(error);
                    });
            },
            userHeader,
            responseType
        );
    }

    static post(service, url, data, sucessCB, errorCB, userHeader = null, responseType = "application/json") {
        RestService.getConfig(
            service,
            config => {
                axios
                    .post(url, data, config)
                    .then(function (response) {
                        RestService.handleResponse(response, sucessCB, errorCB);
                    })
                    .catch(function (error) {
                        if (errorCB) {
                            RestService.handleError(error);
                            errorCB(error);
                        } else RestService.handleError(error);
                    });
            },
            userHeader,
            responseType
        );
    }

    static put(service, url, data, sucessCB, errorCB, userHeader = null, responseType = "application/json") {
        RestService.getConfig(
            service,
            config => {
                axios
                    .put(url, data, config)
                    .then(function (response) {
                        RestService.handleResponse(response, sucessCB, errorCB);
                    })
                    .catch(function (error) {
                        if (errorCB) {
                            RestService.handleError(error);
                            errorCB(error);
                        } else RestService.handleError(error);
                    });
            },
            userHeader,
            responseType
        );
    }

    static delete(service, url, sucessCB, errorCB, userHeader = null, responseType = "application/json") {
        RestService.getConfig(
            service,
            config => {
                axios
                    .delete(url, config)
                    .then(function (response) {
                        RestService.handleResponse(response, sucessCB, errorCB);
                    })
                    .catch(function (error) {
                        if (errorCB) {
                            RestService.handleError(error);
                            errorCB(error);
                        } else RestService.handleError(error);
                    });
            },
            userHeader,
            responseType
        );
    }

    static setToken(token) {
        tokenToSend = token
    }
}

export default RestService;