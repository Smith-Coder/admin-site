import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const doLogout = () => {
        localStorage.removeItem("Isauth");
        navigate("/login/");
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/dashboard/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/client/">Client</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/users/">User</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                        <li className="nav-item">
                            <a type="button" className="nav-link" onClick={doLogout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar