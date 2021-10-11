import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from '@reach/router';
import { profiles } from "./dev-grid-utils.js";

export default function SearchBar() {

  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    setUsernames(profiles.map(({ githubUsername }) => githubUsername));
  }, []);

  return (
    <Autocomplete
      disablePortal
      id='search-bar'
      options={usernames}
      renderOption={(option) => (
        <>
          <div>
            <Link to={`/users/${option.key}`}>{ option.key }</Link>
          </div>
        </>
      )}
      sx={{ backgroundColor: 'white', width: 300 }}
      renderInput={(params) =>
        <TextField
          {...params}
          label="Search"
        />
      }
    />
  );
}