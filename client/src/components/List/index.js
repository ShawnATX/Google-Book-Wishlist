import React from "react";
import "./style.css";

// This file exports both the List and ListItem components
export function List({ children, title }) {
  return (
    <div className="container">
        <h2>{title}</h2>
        {children}
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
