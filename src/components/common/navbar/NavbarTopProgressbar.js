import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {NavDropdown,MenuItem} from 'react-bootstrap';
const NavbarTopProgressbar= () =>{
  return (
    <NavDropdown   eventKey={2} title={<i className="fa fa-tasks fa-fw"></i>} id="basic-nav-dropdown">
      <MenuItem className="dropdown-tasks" eventKey={2.1}>
        <div>
            <p>
                <strong>Task 1</strong>
                <span className="pull-right text-muted">40% Complete</span>
            </p>
            <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-success"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width:"40%"}}>
                    <span className="sr-only">40% Complete (success)</span>
                </div>
            </div>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-tasks" eventKey={2.1}>
        <div>
            <p>
                <strong>Task 2</strong>
                <span className="pull-right text-muted">20% Complete</span>
            </p>
            <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-info"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width:"20%"}}>
                    <span className="sr-only">20% Complete (success)</span>
                </div>
            </div>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-tasks" eventKey={2.2}>
        <div>
            <p>
                <strong>Task 3</strong>
                <span className="pull-right text-muted">60% Complete</span>
            </p>
            <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width:"60%"}}>
                    <span className="sr-only">60% Complete (success)</span>
                </div>
            </div>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-tasks" eventKey={2.3}>
        <div>
            <p>
                <strong>Task 4</strong>
                <span className="pull-right text-muted">80% Complete</span>
            </p>
            <div className="progress progress-striped active">
                <div className="progress-bar progress-bar-danger"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width:"80%"}}>
                    <span className="sr-only">80% Complete (success)</span>
                </div>
            </div>
        </div>
      </MenuItem>
      <MenuItem divider/>
      <MenuItem className="dropdown-messages"  eventKey={1.3}>
        <span className="text-center" style={{display:"block"}}>
          <strong>See All Task</strong>&nbsp;
          <i className="fa fa-angle-right"></i>
        </span>
      </MenuItem>
    </NavDropdown>
  );
};
export default NavbarTopProgressbar;
