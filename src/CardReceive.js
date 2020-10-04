import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import {Link} from 'react-router-dom';

const { Meta } = Card;


function handleReturn (id) {
    localStorage.removeItem(id);
}


const CardReceive = ({book, user}) => {

    return(
        <Card 
            title={book.title}
            extra={<a onClick={() => handleReturn(book.id)} href="/"><Button>Return</Button></a>}
            style={{ width: 350 }} 
            hoverable 
            headStyle={{backgroundColor:'#f37370'}}
            >
            <Link to={'/'+book.id}>
            <Meta
                avatar={<UserOutlined />}
                title={'Name: ' +user.name} 
                description={'Loan Date: ' +user.timestamp}
            />
        </Link>
    </Card>

)


}

export default CardReceive;