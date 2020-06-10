import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";
// import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import {
  Button,
  TextField,
  Tabs,
  Tab,
  Box,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";
import { auth, firebase, useAuth } from "gatsby-theme-firebase";
import { navigate, Link } from "gatsby";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  content: {
    maxWidth: 400,
    padding: 20,
    border: "2px solid #FFC107",
    marginTop: 20,
    boxShadow: "1px -1px 4px 0px #a89c9c",
    minHeight: 500,
  },
  tabs: {
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 0,
  },
  formChild: {
    marginTop: 15,
  },
  authBut: {
    width: "48%",
    "&:last-child": {
      marginLeft: "4%",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const AuthProvs = styled.div`
  display: flex;
`;

const Auth = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const { isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((data) => {
          setLoading(false);
          navigate("/");
          formikLogin.resetForm();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
  });

  const formikSignUp = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPass: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((data) => {
          setLoading(false);
          formikSignUp.resetForm();
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    },
  });

  const handelTab = (event, newTab) => {
    setTabIndex(newTab);
  };

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className={classes.root}>
      <div>Login error</div>
      <div className={classes.content}>
        <Tabs
          className={classes.tabs}
          value={tabIndex}
          aria-label="simple tabs example"
          onChange={handelTab}
          centered
        >
          <Tab label="Login" />
          <Tab label="SignUp" />
        </Tabs>

        <SwipeableViews
          axis={"x"}
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={tabIndex} index={0}>
            <form className={classes.form} onSubmit={formikLogin.handleSubmit}>
              <TextField
                className={classes.formChild}
                label="Email"
                name="email"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.email}
                variant="outlined"
                type="text"
                veriant="outlined"
              />
              <TextField
                className={classes.formChild}
                name="password"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.password}
                label="Password"
                variant="outlined"
                type="password"
              />

              <Button
                className={classes.formChild}
                variant="contained"
                type="submit"
                disabled={loading}
                style={{
                  position: "relative",
                }}
              >
                {loading && (
                  <div style={{ position: "absolute", left: "30%" }}>
                    <CircularProgress size={15} style={{ zIndex: 1000 }} />
                  </div>
                )}
                Log In
              </Button>

              <AuthProvs className={classes.formChild}>
                <Button
                  className={classes.authBut}
                  variant="contained"
                  onClick={async () => {
                    var provider = new firebase.auth.GoogleAuthProvider();
                    provider.addScope(
                      "https://www.googleapis.com/auth/contacts.readonly"
                    );
                    firebase.auth().languageCode = "en";

                    try {
                      const user = await auth.signInWithPopup(provider);
                      navigate("/");
                      console.log(user);
                    } catch (err) {
                      console.error("Authentication Error: ", err);
                    }
                  }}
                >
                  <Icon path={mdiGoogle} size={1} />
                  Google
                </Button>
                <Button
                  className={classes.authBut}
                  variant="contained"
                  onClick={async () => {
                    var provider = new firebase.auth.FacebookAuthProvider();
                    provider.addScope("user_birthday");
                    firebase.auth().languageCode = "en";
                    try {
                      const user = await auth.signInWithPopup(provider);
                      navigate("/");
                      console.log(user);
                    } catch (err) {
                      console.error("Authentication Error: ", err);
                    }
                  }}
                >
                  <FacebookIcon />
                  Facebook
                </Button>
              </AuthProvs>

              <Link
                style={{ marginTop: 20, cursor: "pointer" }}
                to="auth/forgetPass"
              >
                Forget password?
              </Link>
            </form>
          </TabPanel>

          <TabPanel value={tabIndex} index={1}>
            <form className={classes.form} onSubmit={formikSignUp.handleSubmit}>
              <TextField
                className={classes.formChild}
                label="Email"
                name="email"
                onChange={formikSignUp.handleChange}
                value={formikSignUp.values.email}
                variant="outlined"
                type="text"
                veriant="outlined"
              />
              <TextField
                className={classes.formChild}
                label="Password"
                name="password"
                onChange={formikSignUp.handleChange}
                value={formikSignUp.values.password}
                variant="outlined"
                type="password"
              />
              <TextField
                className={classes.formChild}
                label="Confirm Password"
                name="confirmPass"
                onChange={formikSignUp.handleChange}
                value={formikSignUp.values.confirmPass}
                variant="outlined"
                type="password"
                veriant="outlined"
              />

              <Button
                className={classes.formChild}
                variant="contained"
                type="submit"
                style={{
                  position: "relative",
                }}
              >
                {loading && (
                  <div style={{ position: "absolute", left: "30%" }}>
                    <CircularProgress size={15} style={{ zIndex: 1000 }} />
                  </div>
                )}
                SignUp
              </Button>

              <AuthProvs className={classes.formChild}>
                <Button
                  className={classes.authBut}
                  variant="contained"
                  onClick={async () => {
                    var provider = new firebase.auth.GoogleAuthProvider();
                    provider.addScope(
                      "https://www.googleapis.com/auth/contacts.readonly"
                    );
                    firebase.auth().languageCode = "en";

                    try {
                      const user = await auth.signInWithPopup(provider);
                      navigate("/");
                      console.log(user);
                    } catch (err) {
                      console.error("Authentication Error: ", err);
                    }
                  }}
                >
                  <Icon path={mdiGoogle} size={1} />
                  Google
                </Button>
                <Button
                  className={classes.authBut}
                  variant="contained"
                  onClick={async () => {
                    var provider = new firebase.auth.FacebookAuthProvider();
                    provider.addScope("user_birthday");
                    firebase.auth().languageCode = "en";
                    try {
                      const user = await auth.signInWithPopup(provider);
                      navigate("/");
                      console.log(user);
                    } catch (err) {
                      console.error("Authentication Error: ", err);
                    }
                  }}
                >
                  <FacebookIcon />
                  Facebook
                </Button>
              </AuthProvs>
            </form>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Auth;
