import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {renderHomePage} from './lazyLoader'
import {LandingPage} from "../components/Admin/landingPage";
import Dashboard from "../components/Admin/Dashboard";

export class Routes extends Component {
    renderRoutes = () => {
        const Routes = [{
            path: '/', component: renderHomePage

        }, {
            path: '/admin', component: LandingPage, exact:true

        },
            {
                path: '/adminDashboard', component: Dashboard

            }]
        return Routes.map((route, i) => {
            return <Route key={i} exact path={route.path} component={route.component}/>
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.renderRoutes()}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;