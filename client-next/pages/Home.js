import React, { useState, useEffect } from "react";
import CardLoan from "./CardLoan";
import CardReceive from "./CardReceive";
import { Row, Col, Empty } from "antd";

const Home = () => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then((responseJson) => {
        setBooks(responseJson.data);
      });
  }, []);

  const booksList = books.length ? (
    books.map((book) => {
      if (book.status) {
        return (
          <Col key={book.id}>
            <CardReceive book={book} />
          </Col>
        );
      } else {
        return (
          <Col key={book.id}>
            <CardLoan book={book} />
          </Col>
        );
      }
    })
  ) : (
    <Col span={24}>
      <Empty description={<span>Sorry, no books to show.</span>} />
    </Col>
  );
  return (
    <Row justify="center" gutter={[8, 32]}>
      {booksList}
    </Row>
  );
};

export default Home;
