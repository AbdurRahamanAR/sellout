import React from "react";
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
} from "@material-ui/core";
import Layout from "../../components/Layout";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#f5f1e3",
    borderRadius: 8,
  },
  inline: {
    display: "inline",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Layout>
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
          <Typography variant="h5">Product List</Typography>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="comments"
                style={{ marginLeft: 15, marginRight: 15 }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    </Layout>
  );
};
