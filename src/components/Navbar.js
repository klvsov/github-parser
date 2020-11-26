import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-info navbar-expand-lg">
      <div className="navbar-brand">GitHub Parser</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              Info
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
