import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

// Components
import { Form, Input, Button, Checkbox, Card, message } from 'antd';

// CSS
import './../../assets/css/components/LoginForm.scss'

const USER = [
    {username: 'leminhtuan', password: '1'}
]

const LoginForm = (props) => {
    // State
    const [redirect, setRedirect] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // Methods
    const login = () => {
        if (USER.some(u => u.username === username && u.password === password)) {
            sessionStorage.setItem('USERNAME', username)
            setRedirect('/home')
        } else {
            message.error('Username or password is incorrect !!!')
        }
    }

    // Transit To
    if (redirect) {
        return <Redirect to={redirect}/>
    }

    // Render
    return(
        <div className="login-form">
            <Card className="card-login" title="Login" style={{ textAlign: "center"}}>
                <Form  name="basic" initialValues={{ remember: true }}>
                    <Form.Item label="Username" name="username">
                        <Input onChange = {e => setUsername(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input.Password onChange = {e => setPassword(e.target.value)}/>
                    </Form.Item>
                    <Form.Item  name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" onClick={login}>
                            Login
                        </Button>
                    </Form.Item>                   
                </Form>              
            </Card>     
        </div>
    );
}

export default LoginForm