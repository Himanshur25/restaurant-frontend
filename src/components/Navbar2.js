import React from 'react';
import { Link } from "react-router-dom";
// import Home from './Home';

const Navbar2 = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
      <Link className="navbar-brand mx-auto"><b>Welcome to GKMIT Restaurant</b></Link>
       <Link className="btn btn-primary mx-4" to="/checkout">Cart</Link>
      <Link className="btn btn-primary mx-1" to="/login" role="button" onClick={<login/>}>Sign Out</Link>
</nav>
 );
};

export default Navbar2;