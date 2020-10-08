import React from "react";
import { useState, useEffect } from "react";
import { Spin, Breadcrumb, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import { Form, Button } from "antd";
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
);

const Loan = (props) => {
  const [book, setBook] = useState({});
  const redirectToReferrer = false;

  useEffect(() => {
    fetch(
      "http://localhost:5000/books/bookDetail/" + props.match.params.id
    ).then((response) =>
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
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Loan Book</Breadcrumb.Item>
      </Breadcrumb>
      {bookrender}
    </div>
  );
};

export default Loan;
