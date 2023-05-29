import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginForm from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Client from './Client/Client';
import Home from './Dashboard/Home';
import Users from './Users/Users';
import ClientDetails from './Client/ClientDetails';
import UserDetails from './Users/UserDetails';
import Add from './Add/Add';

function RouteConfig() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginForm />} />
                    <Route index element={<LoginForm />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path="client" element={<Client />} />
                        <Route path="users" element={<Users />} />
                        <Route path="client/add" element={<Add />} />
                        <Route path="client/details/:id" element={<ClientDetails />} />
                        <Route path="users/details/:id" element={<UserDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteConfig