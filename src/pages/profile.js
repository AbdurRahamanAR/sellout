import React from "react";
import Layout from "../components/Layout";
import { Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

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
            <img
              src="https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.0-9/64635254_431754904070977_8294663686413352960_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHx6MN392lIxQKmK4SQLNIMJghM3Wcs7tUmCEzdZyzu1WAyo9QBuaXMuftiIR2knEZxDnMqAI7zAz-6OSJhcLdc&_nc_ohc=corHYOG5dkoAX8WWAOA&_nc_ht=scontent.fcgp8-1.fna&oh=706d234ffc1c31dab8bd1c7073ea11a1&oe=5F0F8197"
              alt="profile"
            />
          </div>
          <div>
            <Typography
              style={{
                color: "#515c6f",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              Shuoib Hossain Badon
            </Typography>
            <Typography style={secondaryInfo}>
              Email : Shuibe873@email.com
            </Typography>
            <Typography style={secondaryInfo}>Number : 01795170026</Typography>
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
