import { Layout } from "antd";
import React from "react";
import './style.scss'
import ListCart from "../ListCard";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content className="content">
        <ListCart />
      </Content>
    </Layout>
  );
};
export default Home;
