import React from "react";
import Layout from "../components/Layout";
import { Typography, IconButton, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useAuth } from "gatsby-theme-firebase";
import { navigate } from "@reach/router";

const secondaryInfo = {
  color: "#727c8e",
  fontSize: 18,
  fontWeight: 400,
  marginTop: 3,
};

const shippingAddress = {
  color: "#515c6f",
  fontSize: 20,
  fontWeight: 400,
  letterSpacing: 1.4,
};

export default () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return "Loading...";
  }

  if (!isLoggedIn) {
    navigate("/auth");
  }

  return (
    <Layout>
      <div
        style={{
          width: 900,
          height: 430,
          backgroundColor: "#ffffff",
          borderRadius: 10,
          marginTop: 20,
          marginLeft: 50,
          padding: 40,
          position: "relative",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              marginRight: 40,
              overflow: "hidden",
            }}
          >
            {profile.photoURL
              ? <img
                src={profile.photoURL}
                alt="profile"
              />
              : <img
                src="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png"
                alt="profile"
              />}
          </div>
          <div>
            <Typography
              style={{
                color: "#515c6f",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              {profile.displayName ? profile.displayName : "Sellout Lover"}
            </Typography>
            <Typography style={secondaryInfo}>
              Email: {profile.email}
              {profile.emailVerified
                ? null
                : <span style={{ color: "#ccc", fontSize: 12 }}>
                  &nbsp;(Not varified)
                </span>}
            </Typography>
            <Typography style={secondaryInfo}>
              Number : {profile.phoneNumber ? profile.phoneNumber : <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: 5 }}
              >
                Please Add +
              </Button>}
            </Typography>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <Typography style={shippingAddress}>Shipping address</Typography>
          <ul>
            <li>House Name (বাসার নাম) : Kamal Cottage</li>
            <li>Road Name (রোডের নাম ) : Idriciya Rode</li>
            <li>Word Number (ওয়ার্ড নম্বর ) : 08</li>
            <li>City ( শহর ) : Basurhat</li>
            <li>Subdistrict ( উপজেলা ) : Companygonj</li>
            <li>District ( জেলা ) : Noakhali</li>
          </ul>
        </div>

        <IconButton
          style={{
            position: "absolute",
            top: 20,
            right: 30,
          }}
        >
          <EditIcon />
        </IconButton>
      </div>
    </Layout>
  );
};
