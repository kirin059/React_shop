import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="header">
                <h3>Log In</h3>
            </div>
            <div className="info">
                <input placeholder="ID" />
                <input placeholder="PW" />
                <input placeholder="PW확인" />
            </div>
            <button>LOG IN</button>
        </div>
    );
};

export default Login;