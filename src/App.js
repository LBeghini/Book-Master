import React from 'react';
import Home from './Home';
import BookDetail from './BookDetail';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:id' component={BookDetail}/>
        </Switch>
      </div>
      </BrowserRouter>
      );
  }
}
 

export default App;
