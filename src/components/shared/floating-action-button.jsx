import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButton({ color, onClick, ariaLabel }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, alignSelf: 'center' }}>
      <Fab color={color} aria-label='scroll to top'>
        <NavigationIcon onClick={onClick} aria-label={ariaLabel} />
      </Fab>
    </Box>
  );
}
