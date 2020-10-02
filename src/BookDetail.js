import React from 'react'
import books from './books'
import { Descriptions,Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class BookDetail extends React.Component{

    state = {
        book : null
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        for (let b in books) {
            if (books[b].id === Number(id)) {
                this.setState({
                    book: books[b]
                })
            }
        }
    }
    
    
    render(){
        const book = this.state.book ? (
            <Descriptions title="Book Info" bordered="true" layout="vertical">
                <Descriptions.Item label="Title">{this.state.book.title}</Descriptions.Item>
                <Descriptions.Item label="Author">{this.state.book.author}</Descriptions.Item>
                <Descriptions.Item label="Year">{this.state.book.year}</Descriptions.Item>
          </Descriptions>
        ) : (
            <Spin indicator={antIcon} tip="Loading book..."/>

        );

        return (
                <Row justify="center" gutter={[8, 32]}>
                    {book}
                </Row>
        )
    }

}   


export default BookDetail;