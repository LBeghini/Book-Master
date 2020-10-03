import React from 'react'
import books from './books'
import { Descriptions,Row, Spin, Breadcrumb, Typography, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;

class Loan extends React.Component{

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