import React from 'react'
import 'antd/dist/antd.css';
import { Typography,Row, Col } from 'antd';

const { Title } = Typography;

const Header = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Typography align="center" style={{ padding: '8vh'}}>
                    <a href='/'><Title>Book Master</Title></a>
                    <Title level={3}>In here, we do not judge a book by the cover.</Title>
                </Typography>
            </Col>
        </Row>
    )
}

export default Header;