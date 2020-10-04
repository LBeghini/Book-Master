import React from 'react';
import books from './books';
import CardLoan from './CardLoan';
import CardReceive from './CardReceive';
import { Row, Col, Empty } from 'antd';


const Home = () => {
    const booksList = books.length ? (
        books.map(book => {
            if(localStorage.getItem(book.id)){
                return(
                    <Col key={book.id}>
                        <CardReceive book={book} user={JSON.parse(localStorage.getItem(book.id))} />
                    </Col>
                )
            }else{
                return (
                <Col key={book.id}>
                    <CardLoan book={book}/>
                </Col>
            )
            }
            
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

        <Row justify="center" gutter={[8, 32]}>
                {booksList}
        </Row>
    )

} 

export default Home;