import React from "react";
import { useState, useEffect } from "react";
import { Spin, Breadcrumb, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Form, Button } from "antd";
import { useRouter } from "next/router";
import { Layout, Row, Col } from "antd";
import Header from "../../Header";
import Footer from "../../Footer";

const { Content } = Layout;

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
);

const Loan = () => {
  const [book, setBook] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch("http://localhost:5000/books/bookDetail/" + id).then((response) =>
      response.json().then((obj) => {
        setBook(obj.data);
      })
    );
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
  };

  const bookrender = book ? (
    <form method="POST" action={"http://localhost:5000/books/loans/" + book.id}>
      <Typography.Title level={3} style={{ padding: "3%" }}>
        Confirm you want to borrow {book.title} book?
      </Typography.Title>

      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <input type="text" id="name" name="name" required />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </form>
  ) : (
    <Spin
      indicator={antIcon}
      tip="Loading book..."
      style={{ color: "black" }}
    />
  );

  return (
    <>
      <Header />
      <Content
        style={{ height: "calc(100vh - 20vh - 55px)", overflow: "auto" }}
      >
        <Row gutter={[0, 32]} style={{ margin: 0 }} justify="center">
          <Col span={20}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Loan Book</Breadcrumb.Item>
            </Breadcrumb>
            {bookrender}
          </Col>
        </Row>
      </Content>
      <Footer />
    </>
  );
};

export default Loan;
