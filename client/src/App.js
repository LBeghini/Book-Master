import React from 'react';
import Home from './Home';
import BookDetail from './BookDetail';
import Header from './Header';
import Loan from './Loan';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Layout, Row, Col } from 'antd';

const {Content, Footer} = Layout;

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
          <Header/>
          <Content style={{height: "calc(100vh - 20vh - 55px)", overflow:'auto' }}>
            <Row gutter={[0, 32]} style={{margin:0}} justify="center">
                <Col span={20}>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/loan/:id' component={Loan}/>
                    <Route path='/bookDetail/:id' component={BookDetail}/>
                  </Switch>
              </Col>
            </Row>
            </Content>
          <Footer style={{height: "55px", textAlign: 'center'}}>
            <span style={{ verticalAlign: 'middle', display: 'inline-block'}}>Book Masters ©2020 Created by LBeghini</span>
          </Footer>
      </BrowserRouter>
      );
  }
}
 

export default App;
