import React from "react";
import { Link } from "gatsby";
import { auth } from "gatsby-theme-firebase";
import AppBar from "./AppBar";

export default (props) => {
  const handleLogOut = async () => {
    auth.signOut();
  };
  return (
    <div>
      <AppBar />
      {props.children}
    </div>
  );
};
