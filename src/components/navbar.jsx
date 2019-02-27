import React, {Component} from 'react';


/// Stateless functional component
const Navbar = ({totalCounters}) => { // object destructuring to take only totalCounters property from
    return <nav
        className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
    </nav>
};
export default Navbar;
