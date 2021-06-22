import React from "react";
import "./ResultContainer.css";
import { NameCard } from "../NameCard/NameCard";

export const ResultContainer = ({ suggestedNames }) => {
  const suggestNameJsx = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });
  return <div className="result-container">{suggestNameJsx}</div>;
};
