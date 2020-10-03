import React from 'react'
import books from './books'
import { Descriptions,Row, Spin, Breadcrumb } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;

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
            <Descriptions title="Book Info" bordered="true" layout="vertical" style={{width:'70%'}}>
                <Descriptions.Item label="ISBN">{this.state.book.isbn}</Descriptions.Item>
                <Descriptions.Item label="Title">{this.state.book.title}</Descriptions.Item>
                <Descriptions.Item label="Author">{this.state.book.author}</Descriptions.Item>
                <Descriptions.Item label="Year">{this.state.book.year}</Descriptions.Item>
                <Descriptions.Item label="Publisher">{this.state.book.publisher}</Descriptions.Item>
                <Descriptions.Item label="Language">{this.state.book.language}</Descriptions.Item>
          </Descriptions>
        ) : (
            <Spin indicator={antIcon} tip="Loading book..." style={{color:'black'}}/>

        );

        return (
            <div>
            <Row>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Book Detail</Breadcrumb.Item>
            </Breadcrumb>
            </Row>
            <Row justify="center"  gutter={[0, 32]} style={{margin:0, padding:'5%'}}>
                {book}
            </Row>
            </div>
        )
    }

}   


export default BookDetail;