import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "gatsby-theme-firebase";
import { Box, Typography } from "@material-ui/core";
import { TabContext } from "../contexts";

export default () => {
  const [selectTab, setSelectTab] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <TabContext.Provider
      value={{
        selectTab,
        setSelectTab,
      }}
    >
      <Layout>
        <TabPanel value={selectTab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={selectTab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={selectTab} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={selectTab} index={3}>
          Item Four
        </TabPanel>
      </Layout>
    </TabContext.Provider>
  );
};
