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
};

const menuBarFlex = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const innerItem = {
  flexGrow: "1",
  width: "10px",
  lineHeight: "40px",
  textAlign: "center",
};

export default function Navbar() {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
