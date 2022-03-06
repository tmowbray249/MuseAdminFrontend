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
            email: "",
            password: "",
            token: null,
            login_error: ""
        };

    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    handleLoginClick = () => {
    //    todo obviously do this with data from the server
        let correct_email = "example@example.com";
        let correct_password = "password";
        
        if (this.state.email === correct_email && this.state.password === correct_password) {
            this.setState({
                authenticated: true
            })
        } else {
            this.setState({
                login_error: "Incorrect email or password."
            })
        }
    }

    render() {
        let login_form;
        let app;

        if (this.state.authenticated) {
            login_form = "";
            app = (<BrowserRouter basename="/museapp/MuseAdminFrontend/">
                    <Navigation />
                    <FunctionBar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
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
                        email={this.state.email}
                        handleEmail={this.handleEmail}
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
