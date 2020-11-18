import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// Components
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
// CSS
import './../../assets/css/components/LoginForm.scss'

const LoginForm = (props) => {
    // Redux
    // const access_token = useSelector(state => state.login.access_token)
    const dispatch = useDispatch()

    // State
    const [redirect, setRedirect] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // Methods
    const login = () => {
        dispatch({type: 'LOGIN', params: {username: username, password: password}})
        const access_token = sessionStorage.getItem('access_token')

        if (access_token) {
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
                    <Form.Item label="Username" name="username" 
                            rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input onChange = {e => setUsername(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Password" name="password" 
                            rules={[{ required: true, message: 'Please input your password!' }]}>
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