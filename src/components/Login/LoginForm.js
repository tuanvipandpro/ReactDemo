import React from 'react';

// Components
import { Form, Input, Button, Checkbox, Card } from 'antd';

// CSS
import './../../assets/css/components/LoginForm.scss'

const LoginForm = () => {
    return(
        <div className="login-form">
            <Card className="card-login" title="Login" style={{ textAlign: "center"}}>
                <Form  name="basic" initialValues={{ remember: true }}>
                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item  name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>                   
                </Form>                    
            </Card>     
        </div>
    );
}

export default LoginForm