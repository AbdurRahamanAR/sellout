import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "gatsby-theme-firebase";

export default () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  return (
    <Layout>
      {isLoggedIn && (
        <pre style={{ marginTop: 300 }}>{JSON.stringify(profile)}</pre>
      )}
    </Layout>
  );
};
