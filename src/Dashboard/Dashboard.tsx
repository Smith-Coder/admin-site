import React from 'react'
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Navbar from '../NavBar/Navbar';


function Dashboard() {
    const navigate = useNavigate();
    if (localStorage.getItem("Isauth") === "false") {
        return <Navigate to="/login" />;
    } else {
        return (
            <div>
                <>
                    <Navbar />
                    <Outlet />
                </>
            </div>
        )
    }
}

export default Dashboard