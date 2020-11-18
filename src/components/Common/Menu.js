import React, {useState} from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";

const { SubMenu } = Menu;

export default (props) => {
    const [redirect, setRedirect] = useState()

    // Transit To
    if (redirect) {
        return <Redirect to={redirect}/>
    }    

    const logout = () => {
        sessionStorage.clear()
        setRedirect('/')
    }


    return (
        <Menu
            defaultSelectedKeys={props.default}
            defaultOpenKeys={['sub1']}
            theme="dark"
            mode="inline"
        >
            <SubMenu key="sub1"
                title={
                    <span>
                        <MailOutlined />
                        <span>Menu 1</span>
                    </span>
                }
            >
                <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>  
                <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>                                              
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>   
            <SubMenu
                key="sub4"
                title={
                    <span>
                        <SettingOutlined />
                        <span>Cài Đặt</span>
                    </span>
                }
            >
                <Menu.Item key="9" onClick={logout}>Đăng Xuất</Menu.Item>
            </SubMenu>                 
        </Menu>        
    );
}