import React, { useState } from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views';
import {
  Button,
  TextField,
  Tabs,
  Tab,
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import Icon from '@mdi/react'
import { mdiGoogle } from '@mdi/js'

const useStyles = makeStyles(theme=>({
  root: {
    position: "relative",
    maxWidth: 400,
    background: 'red'
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  content: {
    marginTop: 50,
  },
  tabs: {
    justifyContent: 'center'
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
    '&:last-child': {
      marginLeft: "4%"
    }
  }
}))

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
`

const Auth = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0)

  const handelTab = (event, newTab)=>{
    setTabIndex(newTab)
  }

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  return(
    <ModalRoutingContext.Consumer className={classes.root}>
      {({ modal, closeTo }) => (
        <div>
          <Link to={closeTo}>
            <CloseIcon className={classes.closeIcon}/>
          </Link>
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
              axis={'x'}
              index={tabIndex}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={tabIndex} index={0}>
                <form className={classes.form}>
                  <TextField className={classes.formChild} label="Email" variant="outlined" type="text" veriant="outlined" />
                  <TextField className={classes.formChild} label="Password" variant="outlined" type="password" />
                  <AuthProvs className={classes.formChild}>
                    <Button className={classes.authBut} variant="contained">
                      <Icon 
                        path={mdiGoogle}
                      />
                      Google
                    </Button>
                    <Button className={classes.authBut} variant="contained">
                      <FacebookIcon /> 
                      Facebook
                    </Button>
                  </AuthProvs>
                  <Button className={classes.formChild} variant="contained">Log in</Button>
                </form>
                
              </TabPanel>

              <TabPanel value={tabIndex} index={1}>
                <form className={classes.form}>
                  <TextField className={classes.formChild} label="Email" variant="outlined" type="text" veriant="outlined" />
                  <TextField className={classes.formChild} label="Password" variant="outlined" type="password" />
                  <TextField className={classes.formChild} label="Confirm Password" variant="outlined" type="password" veriant="outlined" />
                  <AuthProvs className={classes.formChild}>
                    <Button className={classes.authBut} variant="contained">
                      <Icon 
                        path={mdiGoogle}
                      />
                      Google
                    </Button>
                    <Button className={classes.authBut} variant="contained">
                      <FacebookIcon /> 
                      Facebook
                    </Button>
                  </AuthProvs>
                  <Button className={classes.formChild} variant="contained">Log in</Button>
                </form>
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default Auth