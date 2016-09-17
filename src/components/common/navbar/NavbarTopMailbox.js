import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {NavDropdown,MenuItem} from 'react-bootstrap';
const NavbarTopMailbox= () =>{
  return (
    <NavDropdown eventKey={1} title={<i className="fa fa-envelope fa-fw"></i>} id="basic-nav-dropdown">
      <MenuItem className="dropdown-messages" eventKey={1.1}>
        <div>
            <strong>John Smith</strong>
            <span className="pull-right text-muted">
                <em>Yesterday</em>
            </span>
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-messages" eventKey={1.2}>
        <div>
            <strong>John Smith</strong>
            <span className="pull-right text-muted">
                <em>Yesterday</em>
            </span>
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-messages"  eventKey={1.3}>
        <span className="text-center" style={{display:"block"}}>
          <strong>Read All Messages </strong>
          <i className="fa fa-angle-right"></i>
        </span>
      </MenuItem>
    </NavDropdown>
  );
};
export default NavbarTopMailbox;
