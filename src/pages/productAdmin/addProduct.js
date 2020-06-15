import React from "react";
import {
  TextField,
  Typography,
  MenuItem,
  IconButton,
  Card,
} from "@material-ui/core";
import Layout from "../../components/Layout";
import AddIcon from "@material-ui/icons/Add";
import { DropzoneArea } from "material-ui-dropzone";

export default () => {
  const [currency, setCurrency] = React.useState("EUR");

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "50px auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 25,
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Add Product</Typography>
      </div>
      <Card style={{ padding: 20 }}>
        <form>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ flexGrow: "1" }}>
              <TextField label="Product Name" variant="outlined" fullWidth />{" "}
              <br />
              <TextField
                type="number"
                label="Product Price"
                variant="outlined"
                fullWidth
                style={{ marginTop: 27 }}
              />
            </div>

            <Card
              style={{
                maxWidth: 250,
                padding: 12,
                marginLeft: 20,
                flexGrow: "1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Typography>Product Catagory</Typography>
                <IconButton style={{ marginLeft: 15 }}>
                  <AddIcon />
                </IconButton>
              </div>
              <TextField
                id="outlined-select-currency"
                select
                value={currency}
                onChange={handleChange}
                variant="outlined"
                style={{ minWidth: "100%" }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Card>

            <TextField
              label="Product Description"
              rows={5}
              variant="outlined"
              multiline
              style={{
                minWidth: 250,
                marginLeft: 20,
                height: "100%",
                flexGrow: "1",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: "1",
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Available Saller"
                value={currency}
                onChange={handleChange}
                variant="outlined"
                style={{ marginLeft: 20 }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-select-currency"
                label="Discount"
                variant="outlined"
                style={{ marginLeft: 20 }}
              />
            </div>
          </div>
        </form>
        <div style={{ marginTop: 20 }}></div>
        <DropzoneArea />
      </Card>
    </div>
  );
};
