import React from "react";
import "./Citation.scss";

interface CitationProps {
  saying: string;
  author: string;
}

export const Citation: React.FC<CitationProps> = ({ saying, author }) => {
  return (
    <div className="citation">
      <div className="citation__wrapper">
        <p className="citation__saying">{saying}</p>
        <p className="citation__author">- {author}</p>
      </div>
    </div>
  );
};
