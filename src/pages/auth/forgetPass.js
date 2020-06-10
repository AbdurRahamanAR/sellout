import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import CloseIcon from "@material-ui/icons/Close";
import { auth, useAuth } from "gatsby-theme-firebase";
import { navigate } from "gatsby";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  content: {
    maxWidth: 544,
    width: 364,
    padding: 20,
    border: "2px solid #FFC107",
    marginTop: 20,
    boxShadow: "1px -1px 4px 0px #a89c9c",
    minHeight: 500,
    boxSizing: "border-box",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 0,
  },
  formChild: {
    marginTop: 15,
    width: "100%",
  },
}));

const Auth = () => {
  const classes = useStyles();
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

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      auth.sendPasswordResetEmail(values.email).then(function() {
        setLoading(false);
        formik.resetForm();
      }).catch(function(error) {
        setLoading(false);
        console.log(error);
      });
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className={classes.formChild}
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
              type="text"
              veriant="outlined"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
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
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
