import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import DevCard from './dev-card';
// import { profiles } from './dev-grid-utils';

const User = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      User page
    </>
  );
};

export default User;
