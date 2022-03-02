import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import AdminHome from "./components/home/AdminHome";
import SettingsHome from "./components/settings/SettingsHome";

function App() {

    return (
        <div className="App">

            {/*todo make sure the basename points to the correct location before final*/}
            <BrowserRouter basename="/museapp/admin">

                <Navigation />

                <Routes>
                    <Route path="/" element={<AdminHome />} />
                    <Route path="/dashboard" element={<AdminHome />} />
                    <Route path="/media" element={<h1>Media Page</h1>} />
                    <Route path="/social" element={<h1>Social Page</h1>} />
                    <Route path="/products" element={<h1>Products Page</h1>} />
                    <Route path="/accounts" element={<h1>Accounts Page</h1>} />
                    <Route path="/settings" element={<SettingsHome />} />
                    <Route path="/my-information" element={<h1>My Information</h1>} />
                    <Route path="*" element={<h1>Not found page</h1>} />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
