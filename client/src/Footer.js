import React from "react";
import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer style={{ height: "55px", textAlign: "center" }}>
      <span style={{ verticalAlign: "middle", display: "inline-block" }}>
        Book Masters ©2020 Created by LBeghini
      </span>
    </Layout.Footer>
  );
};

export default Footer;
