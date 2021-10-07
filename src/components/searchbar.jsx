import { useState, useEffect, useRef } from "react";
import { profiles } from "./dev-grid-utils.js";

const searchResults = {
  position: 'fixed',
  justifyContent: 'center',
  backgroundColor: 'white',
  overflow: 'auto'
};

const searchItem = {
  width: '9.5rem',
  borderStyle: 'solid',
  borderColor: 'whitesmoke',
  cursor: 'pointer'
};

function SearchBar({ devSelect }) {

  let [searching, toggleSearch] = useState(false);
  var [filteredDevs, setFilter] = useState([]);

  const handleChange = (e) => {
    let searchString = e.target.value.toLowerCase();

    setFilter(profiles.filter(profile => {
      return profile.githubUsername.toLowerCase().includes(searchString);
    }))
  }

  const handleClick = (e) => {
    let username = e.target.dataset.username;
    devSelect(username);
  }

  const searchRef = useRef(null);

  // detect if click is in or out of searchbar
  useEffect(() => {
    function handler(e) {
      if (!searchRef.current?.contains(e.target)) {
        searchRef.current.value = "";
        toggleSearch(false);
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, []);

  const renderList = () => {
    if (searching) {
      return (
        filteredDevs.map((profile, key) => {
          return (
            <div
              style={searchItem}
              onClick={ handleClick }
              key={ key }
              data-username={ profile.githubUsername }>
              { profile.githubUsername }
            </div>
          )
        })
      )
    }
  }

  return (
    <div>
      <form>
        <input
          ref={ searchRef }
          onChange={ handleChange }
          onClick={ () => toggleSearch(true) }
          type="text"
          placeholder="Search Contributors"
        />
      </form>
      <div style={searchResults}>
        { renderList() }
      </div>
    </div>
  )
}

export default SearchBar;