import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}{" "}
        <div className="listen-button">
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen <i class="fa-solid fa-volume-high fa-sm"></i>
          </a>
        </div>
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}
