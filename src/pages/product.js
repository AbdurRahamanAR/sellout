import React from "react";
import Layout from "../components/Layout";
import { Tab, Tabs } from "@material-ui/core";
import ProductSlideImages from "../components/product/ProductSlideImages";
import BuyCard from "../components/product/BuyCard";

export default () => {
  return (
    <Layout>
      <div
        style={{
          margin: "10px 0px 20px 0px",
          background: "#fbfbfb",
          padding: 30,
          display: "flex",
        }}
      >
        <ProductSlideImages
          style={{ marginRight: 10, maxWidth: "600px", maxHeight: 500 }}
        />
        <BuyCard style={{ width: "50%" }} />
      </div>
      <Tabs
        value="1"
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Layout>
  );
};
