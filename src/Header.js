import React from 'react'
import 'antd/dist/antd.css';
import { Typography,Row, Col, Layout } from 'antd';

const { Title } = Typography;

const Header = () => {
    return (
        <Layout.Header style={{ height: '20vh', background:'white', paddingTop:'20px'}}>
            <Typography align="center">
                <a href='/'><Title>Book Master</Title></a>
                <Title level={3}>In here, we do not judge a book by the cover.</Title>
            </Typography>
        </Layout.Header>
    )
}

export default Header;