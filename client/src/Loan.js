import React from 'react'
import {  Spin, Breadcrumb, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom';
import { Form, Button } from 'antd';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;

class Loan extends React.Component{

    state = {
        book : null,
        redirectToReferrer:false
    }

    componentDidMount(){

        fetch('http://localhost:5000/books/bookDetail/'+this.props.match.params.id)
        .then(response => response.json())
        .then( responseJson=> {
          this.setState({ book:responseJson.data });
        },
      )
    }
    
    render(){
          const tailLayout = {
            wrapperCol: { offset: 2, span: 16 },
          };
        const book = this.state.book ? (
            
            <form method='POST' action={'http://localhost:5000/books/loans/' + this.state.book.id}>
            <Typography.Title level={3} style={{padding: '3%'}}>Confirm you want to borrow {this.state.book.title} book?</Typography.Title>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true}]}
            >
                <input type="text" id="name" name="name" required/>
            </Form.Item> 
            
            <Form.Item {...tailLayout}>
                <Button htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </form>
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