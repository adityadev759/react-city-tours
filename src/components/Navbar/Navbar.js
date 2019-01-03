import React from "react";
import "./Navbar.scss";
import logo1 from "../../logo1.png";

export default function Navbar() {
  return(
  <nav className="navbar">
  <img src={logo1} alt="tours logo"/>
  <ul className="nav-links">
  <li>
  <a href=" /" className="nav-link">home</a>
  </li>
  <li>
  <a href=" /" className="nav-link">About us</a>
  </li>
  <li>
  <a href=" /" className="nav-link">Promotions</a>
  </li>
  <li>
  <a href=" /" className="nav-link active">Tours</a>
  </li>
  <li>
  <a href=" /" className="nav-link">Reach us</a>
  </li>
  </ul>
  </nav>
  );
}
