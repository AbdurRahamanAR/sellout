import React from "react";
import Layout from "../components/Layout";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const favoriteProducts = {
  color: "#515c6f",
  fontSize: 40,
  fontWeight: 700,
};

// Style for "card"
const card = {
  width: 900,
  height: 140,
  backgroundColor: "#ffffff",
  display: "flex",
  borderRadius: 10,
  padding: "20px 50px",
  alignItems: "center",
  marginTop: 20,
};

const tShirt = {
  color: "#515c6f",
  fontSize: 20,
  fontWeight: 700,
};

// Style for "infoText"
const infoText = {
  color: "#727c8e",
  fontSize: 15,
  fontWeight: 400,
};

export default () => {
  return (
    <Layout>
      <div style={{ padding: "32px 50px" }}>
        <Typography style={favoriteProducts}>Favorite Products</Typography>
        <div style={{ ...card }}>
          <div
            style={{
              width: 95,
              height: 95,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #eee",
            }}
          >
            <img src="" />
          </div>

          <div style={{ marginLeft: 20 }}>
            <Typography style={tShirt}>T-Shirt Collar Mattee</Typography>
            <Typography style={infoText}>Product Id : a2rc2101 </Typography>
            <Typography style={infoText}>Price : 329 </Typography>
          </div>
          <IconButton style={{ marginLeft: "auto", height: 50, width: 50 }}>
            <DeleteIcon />
          </IconButton>
        </div>

        <div style={{ ...card }}>
          <div
            style={{
              width: 95,
              height: 95,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #eee",
            }}
          >
            <img src="" />
          </div>

          <div style={{ marginLeft: 20 }}>
            <Typography style={tShirt}>T-Shirt Collar Mattee</Typography>
            <Typography style={infoText}>Product Id : a2rc2101 </Typography>
            <Typography style={infoText}>Price : 329 </Typography>
          </div>
          <IconButton style={{ marginLeft: "auto", height: 50, width: 50 }}>
            <DeleteIcon />
          </IconButton>
        </div>

        <div style={{ ...card }}>
          <div
            style={{
              width: 95,
              height: 95,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #eee",
            }}
          >
            <img src="" />
          </div>

          <div style={{ marginLeft: 20 }}>
            <Typography style={tShirt}>T-Shirt Collar Mattee</Typography>
            <Typography style={infoText}>Product Id : a2rc2101 </Typography>
            <Typography style={infoText}>Price : 329 </Typography>
          </div>
          <IconButton style={{ marginLeft: "auto", height: 50, width: 50 }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Layout>
  );
};
