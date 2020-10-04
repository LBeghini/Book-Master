import React from 'react'
import books from './books'
import {  Spin, Breadcrumb, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom';
import { Form, Input, Button } from 'antd';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;

class Loan extends React.Component{

    state = {
        book : null,
        redirectToReferrer:false
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

    
    handleSubmit = (values) => {
        localStorage.setItem(this.state.book.id, JSON.stringify({
            name: values.name, 
            timestamp: new Date().toLocaleDateString()
        }));
        this.setState({
            redirectToReferrer : true
        })
       
      };
    
    render(){
        const layout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 10 },
          };
          const tailLayout = {
            wrapperCol: { offset: 3, span: 16 },
          };
        const book = this.state.book ? (
            
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.handleSubmit}            
            >
            <Typography.Title level={3} style={{padding: '3%'}}>Confirm you want to borrow {this.state.book.title} book?</Typography.Title>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Input your name' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        ) : (
            <Spin indicator={antIcon} tip="Loading book..." style={{color:'black'}}/>

        );

            if(this.state.redirectToReferrer === true){
                return <Redirect to="/" />
            }

        return (
        
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Loan Book</Breadcrumb.Item>
                </Breadcrumb>
                {book}
            </div>
        )
    }
}   


export default Loan;