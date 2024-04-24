import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo-Rh">
        <img className="logo" src="./assets/logo-Rh.png" alt="logo-hrnet" />
        <h1 className="nameApplication">HRnet</h1>
      </div>

      <Link className="link_viewEmployee" to={'/employee'}>
        View Current Employees
      </Link>
    </div>
  );
};

export default NavBar;
