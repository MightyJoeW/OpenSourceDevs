import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { profiles } from "./dev-grid-utils.js";

export default function SearchBar() {
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    setUsernames(profiles.map(({ githubUsername }) => githubUsername));
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={usernames}
      renderOption={(props, option) => {
        return (
          <React.Fragment key={option}>
            <Link
              to={`/users/${option}`}
              style={{
                color: "black",
                display: "block",
                width: "90%",
                margin: "auto",
                fontSize: "16px",
                fontWeight: "bold",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                padding: "8px",
                backgroundColor: "#d9d9d9",
              }}
            >
              {option}
            </Link>
            <hr
              style={{
                margin: "5px 0",
                color: "black",
                borderRadius: "5px", // Adding border-radius to the hr element
              }}
            />
          </React.Fragment>
        );
      }}
      sx={{
        backgroundColor: "white",
        width: 300,
      }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}
