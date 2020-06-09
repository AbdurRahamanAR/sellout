import React from "react";
import { Link } from "gatsby";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { mdiHomeEdit } from "@mdi/js";
import { auth } from "gatsby-theme-firebase";

export default (props) => {
  const handleLogOut = async () => {
    auth.signOut();
  };
  return (
    <div>
      <AppBar>
        <div>Sellout</div>

        <Toolbar>
          <IconButton>
            <mdiHomeEdit />
          </IconButton>
        </Toolbar>
        <Link to="/auth">Login</Link>
        <Button onClick={handleLogOut}>Logout</Button>
      </AppBar>

      {props.children}
    </div>
  );
};
