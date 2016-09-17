import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {NavDropdown,MenuItem} from 'react-bootstrap';
const NavbarTopUser= () =>{
  return (
    <NavDropdown   eventKey={4} title={<i className="fa fa-user fa-fw"></i>} id="basic-nav-dropdown">
      <MenuItem className="dropdown-users" eventKey={4.1}>
        <i className="fa fa-user fa-fw"></i> User Profile
      </MenuItem>
      <MenuItem className="dropdown-users" eventKey={4.2}>
        <i className="fa fa-gear fa-fw"></i> Settings
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-users"  eventKey={4.3}>
        <i className="fa fa-sign-out fa-fw"></i> Logout
      </MenuItem>
    </NavDropdown>
  );
};
export default NavbarTopUser;
