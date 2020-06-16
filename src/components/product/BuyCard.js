import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Button from "gatsby-theme-firebase/src/components/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const productNameStyle = {
  color: "#515c6f",
  fontSize: 30,
  fontWeight: 700,
};

const infoTextStyle = {
  color: "#727c8e",
  fontSize: 20,
  fontWeight: 400,
};

export default ({ style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <Typography style={productNameStyle}>T-Shirt Collar Mattee</Typography>
      <Typography style={infoTextStyle}>Product Id : asldfwoer23</Typography>
      <Typography style={infoTextStyle}>Brand : Easy</Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography style={infoTextStyle}>Quantity:</Typography>
        <div>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          4
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          height: 100,
          boxShadow: "0 8 10 rgba(114, 124, 142, 0.15)",
          backgroundColor: "#ffffff",
          borderRadius: 15,
          width: "100%",
          padding: "25px 20px",
          display: "flex",
        }}
      >
        <Typography
          style={{
            color: "#303030",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          Tk 320
        </Typography>
        <Button
          style={{
            borderRadius: 25,
            backgroundColor: "#ef8216",
            marginLeft: 40,
          }}
        >
          Add to cart
        </Button>
        <IconButton style={{ marginLeft: "auto" }}>
          <FavoriteBorderIcon />
        </IconButton>
      </div>
    </div>
  );
};
