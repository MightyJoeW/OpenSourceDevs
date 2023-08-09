import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DevCard from './dev-card';
import { profiles } from './dev-grid-utils';
import { trackingId } from '../keys';

const Home = (props) => {

  const { bg } = props;

  useEffect(() => {
    ReactGA.initialize(`UA-${trackingId}-04`, {
      debug: false, // set to true to log pageview to console
      // I also have the chrome extension with localhost/* whitelisted
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div style={{ backgroundColor: bg === "false" ? 'black' : 'white', color: bg === "false" ? 'white' : 'black' }}>
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
    </div>

  );
};

export default Home;
