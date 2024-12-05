import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate(); 
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => navigate('/')} 
        style={{ cursor: 'pointer' }} 
      >
        Boostudy
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/yoonsoo" className="navbar-link" activeClassName="active-link">
            윤수
          </NavLink>
        </li>
        <li>
          <NavLink to="/eunhee" className="navbar-link" activeClassName="active-link">
            은희
          </NavLink>
        </li>
        <li>
          <NavLink to="/soeun" className="navbar-link" activeClassName="active-link">
            소은
          </NavLink>
        </li>
        <li>
          <NavLink to="/yesung" className="navbar-link" activeClassName="active-link">
            예성
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
