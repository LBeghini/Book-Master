import React from "react";
import Home from "./Home";
import BookDetail from "./BookDetail";
import Header from "./Header";
import Loan from "./Loan";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import Footer from "./Footer";

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content
        style={{ height: "calc(100vh - 20vh - 55px)", overflow: "auto" }}
      >
        <Row gutter={[0, 32]} style={{ margin: 0 }} justify="center">
          <Col span={20}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/loan/:id" component={Loan} />
              <Route path="/bookDetail/:id" component={BookDetail} />
            </Switch>
          </Col>
        </Row>
      </Content>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
