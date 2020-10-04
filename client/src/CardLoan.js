import React from 'react';
import { BookFilled} from '@ant-design/icons';
import { Card, Button } from 'antd';
import {Link} from 'react-router-dom';

const { Meta } = Card;

const CardLoan = ({book}) => {

    return(
        <Card 
            title={book.title}
            extra={<Link to={'/loan/'+book.id}><Button>Borrow</Button></Link>}
            style={{ width: 350 }} 
            hoverable 
            headStyle={{backgroundColor:'#8fd460'}}
            >
            <Link to={'/'+book.id}>
            <Meta
                avatar={<BookFilled />}
                title={'Author '+ book.author} 
                description={'Publisher '+book.publisher}
            />
        </Link>
    </Card>
    )
}

export default CardLoan;