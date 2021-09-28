import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DevCard from '../dev-card/dev-card';
import { profiles } from '../dev-grid-utils';

const DevGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: 3 }}>
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
  );
};

export default DevGrid;
