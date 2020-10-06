import React from 'react'
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
        fetch('http://localhost:5000/books/bookDetail/'+this.props.match.params.id)
        .then(response => response.json())
        .then( responseJson=> {
          this.setState({ book:responseJson.data });
        },
      )
    }

    showConfirm(id) {
        confirm({
          title: 'Do you Want to return this book?',
          onOk() {
            fetch("http://localhost:5000/books/delete/"+id, 
          {method:'GET'}
        ).then(response => window.location.reload())        
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
                extra={this.state.book.status?(
                    <Button onClick={() => this.showConfirm(this.props.match.params.id)}>Return</Button>
                ):(
                    <Link to={'/loan/'+this.state.book.id}><Button>Borrow</Button></Link>
                )}
            >
                <Descriptions.Item label="ISBN">{this.state.book.isbn}</Descriptions.Item>
                <Descriptions.Item label="Title" span={2}>{this.state.book.title}</Descriptions.Item>
                <Descriptions.Item label="Author" >{this.state.book.author}</Descriptions.Item>
                <Descriptions.Item label="Publisher">{this.state.book.publisher}</Descriptions.Item>
                <Descriptions.Item label="Year">{this.state.book.year}</Descriptions.Item>
                <Descriptions.Item label="Language">{this.state.book.language}</Descriptions.Item>
                
                <Descriptions.Item label="Status" span={2}>
                {this.state.book.status?(
                    <Badge status="error" text="Not available" />
                    ):(
                    <Badge status="success" text="Available" />
                )
                }
                </Descriptions.Item>
                {this.state.book.loan.name?(
                    <Descriptions.Item label="UserName" >{this.state.book.loan.name}</Descriptions.Item>
                ):(
                    null
                )
                }
                {this.state.book.loan.timestamp?(
                    <Descriptions.Item label="Date">{this.state.book.loan.timestamp}</Descriptions.Item>
                ):(
                    null
                )
                }
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