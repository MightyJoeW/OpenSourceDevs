import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Box from '@mui/material/Box';
import DevCard from './dev-card';
import { profiles } from './dev-grid-utils';

const User = ({ username }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    profiles.forEach(profile => {
      if (profile.githubUsername === username) {
        setUserData(profile);
      }
    })
  }, [username]);
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>{ username }</h1>
      </header>
      <Box sx={{ flexGrow: 1, margin: '3em' }}>
        <DevCard profile={userData} />
      </Box>
    </>
  );
};

export default User;
