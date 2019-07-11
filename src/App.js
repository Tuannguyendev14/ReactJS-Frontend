import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';
import fire from './Config/fire';
import Index from './components/Homepage';
import Login from './components/LoginPage/login';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

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
        var { user } = this.state;
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* {user ? (<Index />) : (<Login />)} */}
                        {this.showContentMenu(routes)}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
