import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import Box from "@mui/material/Box";
import DevCard from "./dev-card";
import { profiles } from "./dev-grid-utils";
import { useParams } from "react-router";

const User = () => {
  const params = useParams();
  const username = params.username;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    profiles.forEach((profile) => {
      if (profile.githubUsername === username) {
        setUserData(profile);
      }
    });
  }, [username]);

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>{username}</h1>
      </header>
      <Box sx={{ maxWidth: 345, margin: "0 auto" }}>
        <DevCard profile={userData} />
      </Box>
    </>
  );
};

export default User;
