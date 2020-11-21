import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { renderHomePage } from './lazyLoader'
export class Routes extends Component {
    renderRoutes = () => {
        const Routes = [{
            path: '/', component: renderHomePage
        }]
        return Routes.map((route, i) => {
            return <Route key = {i} exact path = {route.path} component = {route.component} />
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