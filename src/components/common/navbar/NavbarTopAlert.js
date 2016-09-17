import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {NavDropdown,MenuItem} from 'react-bootstrap';
const NavbarTopAlert= () =>{
  return (
    <NavDropdown   eventKey={3} title={<i className="fa fa-bell fa-fw"></i>} id="basic-nav-dropdown">
      <MenuItem className="dropdown-alerts" eventKey={3.1}>
        <div>
            <i className="fa fa-comment fa-fw"></i> New Comment
            <span className="pull-right text-muted small">4 minutes ago</span>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-alerts" eventKey={3.2}>
        <div>
            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
            <span className="pull-right text-muted small">12 minutes ago</span>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-alerts"  eventKey={3.3}>
        <div>
            <i className="fa fa-envelope fa-fw"></i> Message Sent
            <span className="pull-right text-muted small">4 minutes ago</span>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-alerts"  eventKey={3.4}>
        <div>
            <i className="fa fa-tasks fa-fw"></i> New Task
            <span className="pull-right text-muted small">4 minutes ago</span>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-alerts"  eventKey={3.5}>
        <div>
            <i className="fa fa-upload fa-fw"></i> Server Rebooted
            <span className="pull-right text-muted small">4 minutes ago</span>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-alerts"  eventKey={1.3}>
        <span className="text-center" style={{display:"block"}}>
          <strong>See All Alerts</strong>&nbsp;
          <i className="fa fa-angle-right"></i>
        </span>
      </MenuItem>
    </NavDropdown>
  );
};
export default NavbarTopAlert;
