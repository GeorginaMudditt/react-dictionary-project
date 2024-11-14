import React from "react";
import "./Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2 className="part-of-speech">{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.slice(0, 5).map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
            </p>
            <Example example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
