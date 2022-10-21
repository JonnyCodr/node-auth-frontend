import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/users' className="nav-link">
              Users
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" className="align-text-bottom"></span>
          </a>
        </h6>
      </div>
    </nav>
  );
};

export default Menu;
