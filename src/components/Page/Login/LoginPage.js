import React from 'react';

// Components
import LoginForm from './../../Login/LoginForm'
// CSS
import './../../../assets/css/page/LoginPage.scss'

const LoginPage = () => {
    return (
        <div className="page-login">
            <LoginForm/>
        </div>
    );
}

export default LoginPage