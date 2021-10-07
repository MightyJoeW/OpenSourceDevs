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

const menuBarFlex = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
};

const innerItem = {
  flexGrow: '1',
  width: '10px',
  lineHeight: '40px',
  textAlign: 'center'
}

export default function Navbar() {

  const devSelect = (e) => {
    return <Redirect to='/users' style={navLinkStyle}/>
  };

  return (
    <Box>
      <AppBar position='static' color='primary'>
        <Toolbar  style={menuBarFlex} >
          <Typography variant='h6' component='div' style={innerItem}>
            <Link to='/' style={navLinkStyle}>
              Open Source Devs
            </Link>
          </Typography>

          <Button style={innerItem}>
            <SearchBar devSelect={ devSelect } />
          </Button>

          <Button color='inherit' style={innerItem}>
            <Link to='about' style={navLinkStyle}>
              About
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
