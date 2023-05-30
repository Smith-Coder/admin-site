import React, { useState } from 'react';
import Alert1 from './Alert1';
import { useNavigate } from 'react-router-dom'
import './login.css'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const handleLogin = (event: any) => {
        event.preventDefault();

        if (username === '' && password === '') {
            setShowAlert2(true);
        }
        else if (username === 'admin' && password === 'admin') {
            localStorage.setItem("uname", username);
            localStorage.setItem("Isauth", "true");
            navigate("/dashboard");
        } else {
            setShowAlert1(true);
        }
    };
    const navigate = useNavigate();
    const handleReset = () => {
        setUsername("");
        setPassword("");
    };
    return (
        <div className="container mt-5">
            <h2>Login Form</h2>
            {showAlert2 && (
                <Alert1 onClick={() => setShowAlert2(false)}>Please Enter your userName and Password</Alert1>
            )}
            {showAlert1 && (
                <Alert1 onClick={() => setShowAlert1(false)}>Invalid UserName and password</Alert1>
            )}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-primary" onClick={handleReset}>
                    Reset
                </button>
            </form>
        </div>
    );
};

export default LoginForm;