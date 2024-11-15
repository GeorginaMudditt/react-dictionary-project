import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "21f1caaedf3t0e238fc991db4d2f34bo";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);

    // let pexelsApiKey =
    //   "DwE1zoemKWPeS35IfNBLuUwAL0s2OQu1J7UoIHTvSar0busrhhuijz8x";
    // let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    // let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    // axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="dictionary-header">
        <h3>Which word would you like to search for?</h3>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={handleKeywordChange}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
      </div>
      <Results results={results} />
      <Images images={images} />
    </div>
  );
}
