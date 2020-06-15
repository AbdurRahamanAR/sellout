import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItemSecondaryAction,
  Fab,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import Layout from "../components/Layout";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddProduct from "./productAdmin/AddProduct";
import { firestore, useFirestoreQuery } from "gatsby-theme-firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#f5f1e3",
    borderRadius: 8,
  },
  inline: {
    display: "inline",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchBox: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
}));

export default () => {
  const classes = useStyles();

  const [products, isLoading] = useFirestoreQuery(
    firestore.collection("products"),
  );

  const createProduct = (name, price) => {
    firestore.collection("products").add({
      category: "vagitable",
      price,
      seller: "/sellers/CaJKJ5CX59jTmZ3hMBw5",
      name,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    firestore.collection("products").doc(id).delete();
  };

  return (
    <Layout>
      <div
        style={{
          maxWidth: "1300px",
          margin: "50px auto",
          width: "100%",
        }}
      >
        <AddProduct
          createProduct={createProduct}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 25,
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Product List</Typography>
          <Paper component="form" className={classes.searchBox}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <FilterListIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search Product"
              inputProps={{ "aria-label": "search product" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <List className={classes.root}>
          {isLoading && <CircularProgress />}
          {products?.map((product) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={<React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                </React.Fragment>}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  style={{ marginLeft: 15, marginRight: 15 }}
                  onClick={() => {
                    deleteProduct(product._id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Layout>
  );
};
