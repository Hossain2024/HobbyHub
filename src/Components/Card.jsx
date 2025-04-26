// src/components/Card.jsx
import React from "react";
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({ title, content, url, likes }) => {
    const encodedTitle = encodeURIComponent(title);
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <Link to={`/post/${encodedTitle}`} className="read-link">Read →</Link>
      <p className="likes">❤️ {likes || 0} Likes</p>
    </div>
  );
};

export default Card;
