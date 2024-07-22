import React from "react";
import "./Menu.css";
import Link from "next/link";

export const Menu = ({ menuItems }) => {
  return (
    <ul data-testid="menu" className="menu">
      {menuItems.map(({ id, text, path }, ind) => {
        return (
          <li key={ind}>
            <Link id={id} href={`/${path}`}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
