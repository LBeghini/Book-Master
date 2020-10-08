import React, { useState, useEffect } from "react";
import {
  Descriptions,
  Row,
  Spin,
  Breadcrumb,
  Badge,
  Button,
  Modal,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../Header";
import Footer from "../../Footer";
import { Layout, Col } from "antd";

const { Content } = Layout;

const { confirm } = Modal;

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
);

const BookDetail = () => {
  const [book, setBook] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch("http://localhost:5000/books/bookDetail/" + id)
      .then((response) => response.json())
      .then((responseJson) => {
        setBook(responseJson.data);
      });
  });

  const showConfirm = (id) => {
    confirm({
      title: "Do you Want to return this book?",
      onOk() {
        fetch("http://localhost:5000/books/delete/" + id, {
          method: "GET",
        }).then((response) => window.location.reload());
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  /* 
           for (const [key, value] of Object.entries(object1)) {
            console.log(`${key}: ${value}`);
           }
          */

  const descriptionBook = book ? (
    <Descriptions
      title="Book Info"
      bordered
      layout="horizontal"
      style={{ width: "70%" }}
      extra={
        book.status ? (
          <Button onClick={() => showConfirm(book.id)}>Return</Button>
        ) : (
          <Link href={"/loan/" + book.id}>
            <Button>Borrow</Button>
          </Link>
        )
      }
    >
      <Descriptions.Item label="ISBN">{book.isbn}</Descriptions.Item>
      <Descriptions.Item label="Title" span={2}>
        {book.title}
      </Descriptions.Item>
      <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
      <Descriptions.Item label="Publisher">{book.publisher}</Descriptions.Item>
      <Descriptions.Item label="Year">{book.year}</Descriptions.Item>
      <Descriptions.Item label="Language">{book.language}</Descriptions.Item>

      <Descriptions.Item label="Status" span={2}>
        {book.status ? (
          <Badge status="error" text="Not available" />
        ) : (
          <Badge status="success" text="Available" />
        )}
      </Descriptions.Item>
      {book.loan?.name ? (
        <Descriptions.Item label="UserName">{book.loan.name}</Descriptions.Item>
      ) : null}
      {book.loan?.timestamp ? (
        <Descriptions.Item label="Date">
          {book.loan.timestamp}
        </Descriptions.Item>
      ) : null}
    </Descriptions>
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
            <Row>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Book Detail</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row
              justify="center"
              gutter={[0, 32]}
              style={{ margin: 0, padding: "5%" }}
            >
              {descriptionBook}
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer />
    </>
  );
};

export default BookDetail;
