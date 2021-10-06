import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Redirect } from '@reach/router';
import SearchBar from './searchbar';

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default function Navbar() {

  const devSelect = (e) => {
    return <Redirect to='/users' style={navLinkStyle}/>
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' style={navLinkStyle}>
              Open Source Devs
            </Link>
          </Typography>

          <SearchBar devSelect={ devSelect }/>

          <Button color='inherit'>
            <Link to='about' style={navLinkStyle}>
              About
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
