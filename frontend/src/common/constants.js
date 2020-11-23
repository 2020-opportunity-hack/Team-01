export const API_BASE_URL = "http://localhost:8080";
export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/adminDashboard";

export const OAUTH2_REDIRECT_URI_TEST = "http://localhost:8080/user/token";
export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;

export const TEST_URL = API_BASE_URL + "/user/token";
