import React from 'react'
import books from './books'
import { Descriptions,Row, Spin, Breadcrumb, Badge, Button, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const { confirm } = Modal;

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

    showConfirm(id) {
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
    
    render(){
        const book = this.state.book ? (
            <Descriptions 
                title="Book Info" 
                bordered layout="horizontal" 
                style={{width:'70%'}} 
                extra={localStorage.getItem(this.state.book.id)?(
                    <Button onClick={() => this.showConfirm(this.state.book.id)}>Return</Button>
                ):(
                    <Link to={'/loan/'+this.state.book.id}><Button>Loan</Button></Link>
                )}
            >
                <Descriptions.Item label="ISBN">{this.state.book.isbn}</Descriptions.Item>
                <Descriptions.Item label="Title" span={3}>{this.state.book.title}</Descriptions.Item>
                <Descriptions.Item label="Author" >{this.state.book.author}</Descriptions.Item>
                <Descriptions.Item label="Publisher">{this.state.book.publisher}</Descriptions.Item>
                <Descriptions.Item label="Year">{this.state.book.year}</Descriptions.Item>
                <Descriptions.Item label="Language">{this.state.book.language}</Descriptions.Item>
                <Descriptions.Item label="Status">{localStorage.getItem(this.state.book.id)?(<Badge status="error" text="Not available" />):(<Badge status="success" text="Available" />)}</Descriptions.Item>
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