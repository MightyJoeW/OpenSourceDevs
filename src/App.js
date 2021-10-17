import React, { useEffect } from "react";
import ReactGA from "react-ga";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import routes from "./routes";
import { trackingId } from "./keys";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
  }, []);
  return (
    <>
      <CssBaseline />
      <div
        style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
      >
        <Navbar />
        {routes}
        <Footer />
      </div>
    </>
  );
};

export default App;
