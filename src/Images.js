import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images && props.images.length > 0) {
    console.log(props.images);
    return (
      <div className="Images">
        {props.images.slice(0, 8).map((image, index) => (
          <img
            key={index}
            src={image.src.landscape}
            alt={image.alt || "searched word"}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
