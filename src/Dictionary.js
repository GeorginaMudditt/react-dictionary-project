import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of "${keyword}"`);
  }

  return (
    <div className="Dictionary">
      <h3>What would you like to search for?</h3>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
