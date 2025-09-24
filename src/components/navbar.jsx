import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import ThemeToggle from "./ThemeToggle";

const navLinkStyle = {
  textDecoration: "none",
  display: "flex",
  flexGrow: "1",
  width: "8rem",
  overflow: "hidden",
  color: 'var(--text-color)',
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
};

export default function Navbar() {
  return (
    <Box sx={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <AppBar
        position="static"
        elevation={0} // remove shadow if desired
        sx={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
        }}
      >
        <Toolbar sx={menuBarFlex}>
          <Typography variant="h6" component="div" sx={innerItem}>
            <Link to="/" style={navLinkStyle}>
              Open Source Devs
            </Link>
          </Typography>

          <Box sx={innerItem}>
            <SearchBar />
          </Box>

          <Box sx={innerItem}>
            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </Box>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
