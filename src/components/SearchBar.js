import React, { useState } from 'react';

// function component:
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    // preventDefault make sure the browser does not attempt to automatically submit and refresh the page any time that the user actually submits it by hitting enter.
    event.preventDefault();
    // Any time that someone submits a search term, we make an actual request to the YouTube API.
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
