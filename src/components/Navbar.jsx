import React from "react";
import { navigation } from "../constants";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
