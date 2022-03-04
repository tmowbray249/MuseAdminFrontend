import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import AdminHome from "./components/home/AdminHome";
import EventsHome from "./components/events/EventsHome";
import MediaHome from "./components/media/MediaHome";
import ProductsHome from "./components/products/ProductsHome";
import AccountsHome from "./components/accounts/AccountsHome";
import SettingsHome from "./components/settings/SettingsHome";
import UserHome from "./components/user_account/UserHome";
import NotFoundPage from "./components/common/NotFoundPage";

function App() {

    return (
        <div className="App">

            {/*todo make sure the basename points to the correct location before final*/}
            <BrowserRouter basename="/museapp/admin">

                <Navigation />

                <Routes>
                    <Route path="/" element={<AdminHome />} />
                    <Route path="/dashboard" element={<AdminHome />} />
                    <Route path="/events" element={<EventsHome />} />
                    <Route path="/media" element={<MediaHome />} />
                    <Route path="/products" element={<ProductsHome />} />
                    <Route path="/accounts" element={<AccountsHome />} />
                    <Route path="/settings" element={<SettingsHome />} />
                    <Route path="/my-information" element={<UserHome />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
