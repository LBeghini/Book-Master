import React from 'react';
import Home from './Home';
import BookDetail from './BookDetail';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Layout } from 'antd';

const {Content, Footer} = Layout;

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
          <Header/>
          <Content style={{height: "calc(100vh - 20vh - 55px)" }}>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/:id' component={BookDetail}/>
              </Switch>
            </Content>
          <Footer style={{height: "55px", textAlign: 'center'}}>
            Book Masters ©2020 Created by LBeghini
          </Footer>
      </BrowserRouter>
      );
  }
}
 

export default App;
