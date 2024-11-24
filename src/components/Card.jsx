import React from "react";
import "./card.css";

const Card = ({ title, description, content }) => {
  console.log(title, description, content);

  return (
    <div className="card">
      <div className="top">
        <span className="title">{title}</span>
        <span className="i">i</span>
      </div>
      <div className="description">
        <p>
          <span>Description: </span>
          {description}
        </p>
      </div>
      <div className="content">
        {content ? (
          <iframe
            src={content}
            title="Embedded Content"
            width="100%"
            height="291px"
            style={{ border: "none" }}
            allow="fullscreen"
          ></iframe>
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
};

export default Card;
