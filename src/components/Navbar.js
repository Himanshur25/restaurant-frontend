import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/register" role="button">SignUp</Link>
      </div>
    
    </div>
</nav>
    );
};

export default Navbar;