import React from "react";
import { BookFilled } from "@ant-design/icons";
import { Card, Button } from "antd";
import Link from "next/link";

const { Meta } = Card;

const CardLoan = ({ book }) => {
  return (
    <Card
      title={book.title}
      extra={
        <Link href={"/loan/" + book.id}>
          <Button>Borrow</Button>
        </Link>
      }
      style={{ width: 350 }}
      hoverable
      headStyle={{ backgroundColor: "#8fd460" }}
    >
      <Link href={"/bookDetail/" + book.id}>
        <Meta
          avatar={<BookFilled />}
          title={"Author " + book.author}
          description={"Publisher " + book.publisher}
        />
      </Link>
    </Card>
  );
};

export default CardLoan;
