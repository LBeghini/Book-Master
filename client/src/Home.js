import React from 'react';
//import books from './books';
import CardLoan from './CardLoan';
import CardReceive from './CardReceive';
import { Row, Col, Empty } from 'antd';

class Home extends React.Component {

    state = {
        books: [ ]
    }

    componentDidMount() {
        fetch('http://localhost:5000/books')
        .then(response => response.json())
        .then( responseJson=> {
          this.setState({ books:responseJson.data });
        },
      )
    
    }

    
    render(){
        const booksList = this.state.books.length ? (
            this.state.books.map(book => {
                if(book.status){
                    return(
                        <Col key={book.id}>
                            <CardReceive book={book} />
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


} 

export default Home;