import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,DropdownButton} from 'react-bootstrap';
import NavbarTopMailbox from './navbar/NavbarTopMailbox';
import NavbarTopProgressbar from './navbar/NavbarTopProgressbar';
import NavbarTopAlert from './navbar/NavbarTopAlert';
import NavbarTopUser from './navbar/NavbarTopUser';
import Sidebar from './Sidebar';
import LoadingDots from './LoadingDots';

const Header= ({loading}) =>{

  return (
    <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="index" className="navbar-brand">SB Admin v2.0</Link>
          {loading &&  <LoadingDots interval={500} dots={100}/>}
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <ul className="nav navbar-top-links navbar-right">
          {/*Navbar Mailbox*/}
          <NavbarTopMailbox />
          {/*Navbar Progress Bar*/}
          <NavbarTopProgressbar />
          {/*Navbar alert*/}
          <NavbarTopAlert />
          {/*Navbar User*/}
          <NavbarTopUser/>
        </ul>
        <Sidebar />


    </nav>
  );
};
Header.propTypes = {
  loading:PropTypes.bool.isRequired
};
export default Header;
