import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Card, Button, Modal } from 'antd';
import {Link} from 'react-router-dom';

const { Meta } = Card;
const { confirm } = Modal;

// function handleReturn (id) {
//     localStorage.removeItem(id);
// }

function showConfirm(id) {
    confirm({
      title: 'Do you Want to return this book?',
      onOk() {
        localStorage.removeItem(id);
        console.log('OK');
        window.location.reload();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
}

const CardReceive = ({book, user}) => {

    return(
        <Card 
            title={book.title}
            extra={<Button onClick={() => showConfirm(book.id)}>Return</Button>}
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