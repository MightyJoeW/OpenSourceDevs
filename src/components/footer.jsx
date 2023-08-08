import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function Copyright() {
  return (
    <>


      <Divider sx={{ margin: "10px 0" }} />

      <Typography variant="body2" color="white" >
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://github.com/MightyJoeW/OpenSourceDevs"
        >
          Open Source Devs
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <Box
          sx={{
            bgcolor: "black",
            p: 6,
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "end",
          }}
          component="footer"
        >
          <Typography color="white" variant="h6" align="center" gutterBottom>
            Want to contribute?
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="white"
            component="p"
          >
            Get started{" "}
            <Link
              href="https://www.getscriptordietryin.com/contributing-to-open-source-starter-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </Link>
            .
          </Typography>
          <Copyright />
        </Box>
      </div>
    </>
  );
}
