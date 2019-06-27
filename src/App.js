import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';

class App extends Component {
    showContentMenu = () => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index}
                        path={route.path}
                        component={route.main}
                        exact={route.exact}
                    />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.showContentMenu(routes)}
                </Switch>

            </BrowserRouter>
        );
    }
}

export default App;
