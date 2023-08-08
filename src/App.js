import React, { useEffect, useState } from "react";
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

  const [bg, setBg] = useState("true");

  function changebg() {
    console.log("bg changed")
    if (bg === "true") { return setBg("false"); }
    else {
      return setBg("true");
    }

  }

  return (
    <>
      <CssBaseline />
      <div
        style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
      >
        <Navbar changeBg={changebg} />
        {routes(bg)}
        <Footer />
      </div>
    </>
  );
};

export default App;


