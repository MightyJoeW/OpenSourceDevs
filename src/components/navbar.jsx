import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@reach/router';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/'>Open Source Allstars</Link>
          </Typography>
          <Button color='inherit'>
            <Link to='help'>Help</Link>
          </Button>
          <Button color='inherit'>
            <Link to='about'>About</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
