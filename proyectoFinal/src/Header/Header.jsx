import React from "react";
import "./Header.css";

export default function Header({titulo}) {
  return (
    <div className="pricipalTitle">
      <h1 className="tittle">{titulo}</h1>
    </div>
  );
}
