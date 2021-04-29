import React from 'react';
import './Signup.scss'

const Signup = () => {
    return (
        <div className="signup">
            <div className="header">
                <h3>Sign Up</h3>
            </div>
            <div className="info">
                <input placeholder="ID" />
                <input placeholder="PW" />
                <input placeholder="PW확인" />
                <input placeholder="Email" />
                <input placeholder="이름" />
                <input placeholder="생년월일(8자리 숫자로 입력)" />
                <input placeholder="성별" />
            </div>
            <button className="loginBtn">Sign Up</button>

            <div className="footer">
                <p>개인정보 동의</p>
            </div>
        </div>
    );
};

export default Signup;