import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <section className="search">
      <form>
        <input
          id="search"
          type="text"
          className="form-control"
          placeholder="Character name . . ."
          value={props.text}
          onChange={props.changed}
        />
      </form>
    </section>
  );
};

export default SearchBar;
