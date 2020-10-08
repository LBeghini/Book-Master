import React from "react";
import Home from "./Home";
import BookDetail from "./bookDetail/[id]";
import Header from "./Header";
import Loan from "./loan/[id]";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import Footer from "./Footer";

const { Content } = Layout;

const App = () => {
  return (
    <>
      <Header />
      <Content
        style={{ height: "calc(100vh - 20vh - 55px)", overflow: "auto" }}
      >
        <Row gutter={[0, 32]} style={{ margin: 0 }} justify="center">
          <Col span={20}>
            <Home />
          </Col>
        </Row>
      </Content>
      <Footer />
    </>
  );
};

export default App;
