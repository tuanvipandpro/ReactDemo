import React from 'react';
import { Layout } from 'antd';
import './../../../assets/css/page/HomePage.scss'

import Menu from './../../Common/Menu'

const { Sider, Content } = Layout;

const HomePage = () => {
    return (
        <Layout>
            <Sider className="home-page">
                <Menu default={['1']}/>
            </Sider>
            <Content>Content</Content>
        </Layout>
    );
}

export default HomePage