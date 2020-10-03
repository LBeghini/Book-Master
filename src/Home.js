import React from 'react';
import books from './books';
import { BookFilled} from '@ant-design/icons';
import { Row, Col, Card, Empty, Button } from 'antd';
import {Link} from 'react-router-dom';


const Home = () => {
    const { Meta } = Card;
    const booksList = books.length ? (
        books.map(book => {
            return (
                <Col key={book.id}>

                    <Card 
                        title={book.title}
                        extra={<Link to={'/loan/'+book.id}><Button>Loan</Button></Link>}
                        style={{ width: 350 }} 
                        hoverable 
                        avatar={<BookFilled />}
                        headStyle={{backgroundColor:'#52c41a'}}
                        >
                        <Link to={'/'+book.id}>
                        <Meta
                        avatar={<BookFilled />}
                        title={book.author} 
                        description={book.publisher}
                         />
                         </Link>
                    </Card>
                </Col>
            )
        })
    ) : (
        <Col span={24}>
            <Empty 
                description={
                    <span>Sorry, no books to show.</span>
                }   
            />
        </Col>
    )

    return(
            <Row gutter={[0, 32]} style={{margin:0}} justify="center">
                <Col span={20}>
                    <Row justify="center" gutter={[8, 32]}>
                            {booksList}
                    </Row>
                </Col>
            </Row>
    )

} 

export default Home;