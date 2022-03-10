import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Dashboard from "./components/home/Dashboard";
import MediaPage from "./components/media/MediaPage";
import EventsPage from "./components/events/EventsPage";
import ProductsHome from "./components/products/ProductsPage";
import AccountsPage from "./components/accounts/AccountsPage";
import SettingsHome from "./components/settings/SettingsPage";
import UserHome from "./components/user_account/UserPage";
import NotFoundPage from "./components/common/NotFoundPage";
import FunctionBar from "./components/common/FunctionBar";
import Login from "./components/common/Login";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            username: "",
            password: "",
            token: null,
            login_error: "",
            user: ""
        };

    }

    componentDidMount() {
        if (localStorage.getItem('wt')) {  // todo look into the other method of storing tokens
            let url = "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/authenticate";

            let formData = new FormData();
            formData.append('token', localStorage.getItem('wt'));

            fetch(url, {
                method: 'POST',
                headers: new Headers(),
                body: formData
            }).then( (response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw Error();
                }
            }).then( (data) => {
                if (data.statusCode !== 200) {
                    localStorage.removeItem('wt');
                    this.setState({
                        authenticated: false,
                        login_error: "You have been logged out to keep your account secure. Please login again.",
                        user: ""
                    });
                } else {
                    this.setState({
                        authenticated: true,
                        token: data.data.token,
                        user: data.data.username
                    });
                }
            }).catch( () => {
                this.setState({
                    authenticated: false,
                    login_error: "Something went wrong. Please try again later.",
                    user: ""
                });
            });
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    handleLoginClick = () => {
        let url = "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/authenticate";
        if (this.state.username !== "" && this.state.password !== "") {
            let formData = new FormData();
            formData.append('username', this.state.username);
            formData.append('password', this.state.password);

            fetch(url, {
                method: 'POST',
                headers: new Headers(),
                body: formData
            }).then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw Error();
                }
            }).then((data) => {
                if (data.statusCode === 200) {
                    if ('token' in data.data) {
                        this.setState({
                            authenticated: true,
                            token: data.data.token,
                            user: data.data.username
                        });

                        localStorage.setItem('wt', data.data.token);
                    }
                } else if (data.statusCode === 401) {
                    let error = data.message.split(".")[0];
                    if (error === "Incorrect username or password") {
                        this.setState({login_error: error});
                    }
                }
            }).catch(() => {
                this.setState({
                    authenticated: false,
                    login_error: "Something went wrong. Please try again later.",
                    user: ""
                });
            });
        } else {
            this.setState({login_error: "Please enter both an username and password"});
        }

    }

    handleLogoutClick = () => {
        this.setState({
            authenticated: false,
            token: null,
            login_error: "",
            user: ""
        })

        localStorage.removeItem('wt');
    }

    render() {
        let login_form;
        let app;

        if (this.state.authenticated) {
            login_form = "";
            app = (<BrowserRouter basename="/museapp/MuseAdminFrontend/">
                    <Navigation />
                    <FunctionBar handleLogoutClick={this.handleLogoutClick} />
                    <Routes>
                        <Route path="/" element={<Dashboard user={this.state.user}/>} />
                        <Route path="/dashboard" element={<Dashboard user={this.state.user}/>} />
                        <Route path="/media" element={<MediaPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/products" element={<ProductsHome />} />
                        <Route path="/accounts" element={<AccountsPage />} />
                        <Route path="/settings" element={<SettingsHome />} />
                        <Route path="/my-information" element={<UserHome />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            );
        } else {
            app = "";
            login_form = (
                <div className="login-background">
                    <Login
                        username={this.state.username}
                        handleUsername={this.handleUsername}
                        password={this.state.password}
                        handlePassword={this.handlePassword}
                        handleLoginClick={this.handleLoginClick}
                        error={this.state.login_error}
                    />
                </div>
            )
        }

        return(
            <div className="App">
                {login_form}
                {app}
            </div>
        );
    }

}

export default App;
