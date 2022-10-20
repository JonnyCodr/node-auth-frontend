import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
      <ul className='my-2 my-md-0 mr-md-3'>
        <li className='p-2 text-white'>Sign Out</li>
      </ul>
    </nav>
  );
}

export default Nav;
