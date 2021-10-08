import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DevCard from './dev-card';
import { profiles } from './dev-grid-utils';
import { trackingId } from '../keys';

const Home = () => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Open Source Devs</h1>
        <h2> Software Developers Making a Difference</h2>
      </header>
      <Box sx={{ flexGrow: 1, margin: '3em' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(profiles).map((profile, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <DevCard profile={profile} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
