import React from 'react'
import 'antd/dist/antd.css';
import { Typography, Layout } from 'antd';

const { Title } = Typography;

const Header = () => {
    return (
        <Layout.Header style={{ height: '20vh', background:'white', paddingTop:'20px'}}>
            <Typography align="center">
                <Title>Book Master</Title>
                <Title level={3}>Books to Master your programming skills.</Title>
            </Typography>
        </Layout.Header>
    )
}

export default Header;