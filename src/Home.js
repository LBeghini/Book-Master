import React from 'react';
import books from './books';
import { BookFilled} from '@ant-design/icons';
import { Row, Col, Card, Empty } from 'antd';


const Home = () => {
    const { Meta } = Card;
    const booksList = books.length ? (
        books.map(book => {
            return (
                <Col>
                <a href={'/'+book.id}>
                    <Card 
                        style={{ width: 250 }} 
                        key={book.id}
                        hoverable 
                        >
                        <Meta
                        avatar={<BookFilled />}
                        title={book.title} 
                        description="This is the description"
                         />
                    </Card>
                </a>
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
            <Row gutter={[0, 32]}>
                <Col span={18} offset={3}>
                    <Row justify="space-between" gutter={[8, 32]}>
                            {booksList}
                    </Row>
                </Col>
            </Row>
    )

} 

export default Home;