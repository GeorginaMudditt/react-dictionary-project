import React from "react";
import dictionaryPic from "./images/dictionary-pic.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img
        className="img-fluid dictionary-pic"
        src={dictionaryPic}
        alt="dictionary page"
      />
      <h1>Dictionary App</h1>
    </div>
  );
}
