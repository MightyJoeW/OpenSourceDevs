import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";


const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  display: "flex",
  flexGrow: "1",
  width: "8rem",
  overflow: "hidden",
};

const menuBarFlex = {
  width: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexGrow: "3",
};

const innerItem = {
  display: "flex",
  flexGrow: "1",
  width: "8rem",
  lineHeight: "30px",
  margin: "0 0 0 10px",
  textAlign: "center",
  radius: "10px",
};

const Btn = {
  backgroundColor: "white",
  color: "black",
  fontsize: "20px",
  padding: "10px 60px",
  borderradius: "5px",
  margin: "10px 0px",
  cursor: "pointer",
};


export default function Navbar(props) {
  return (
    <Box>
      {/*!!WARN: Best practice would be to use a *theme* color, not hardcoded as below */}
      <AppBar position="static" color="primary" sx={{ bgcolor: "#000000" }}>
        <Toolbar style={menuBarFlex}>
          <Typography variant="h6" component="div" style={innerItem}>
            <Link to="/" style={navLinkStyle}>
              Open Source Devs
            </Link>
          </Typography>

          <Box style={innerItem}>
            <SearchBar />
          </Box>

          <Button color="inherit" style={innerItem}>
            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </Button>
          <button onClick={props.changeBg} style={Btn}>Dark Mode</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
