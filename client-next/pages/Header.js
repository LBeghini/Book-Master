import React from 'react'
import 'antd/dist/antd.css';
import { Typography , Row, Col} from 'antd';

const { Title } = Typography;

const Header = () => {
    return (
        <Row gutter={[0, 32]} style={{margin:0, height:'20vh'} } justify="center">
        <Col span={20}>
            <Typography align="center">
                <Title>Book Master</Title>
                <Title level={3}>Books to Master your programming skills.</Title>
            </Typography>
        </Col>
        </Row>
    )
}

export default Header;