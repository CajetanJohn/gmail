// src/components/SideNav.js
import React, { useState } from 'react';
import './Style.css'

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <div className={`sidenav ${isSideNavOpen ? 'open' : 'closed'}`}>
      <div className="sidenav-header">
        <button className="menu-button" onClick={toggleSideNav}>
          open stuff
        </button>
        <div className="app-title">Your App</div>
      </div>

      <div className="nav-items">
        {/*<NavItem icon={<FaIcons />} label="Profile" />*/}
        <NavItem icon={'hellow'} label="Profile" />
        <NavItem icon={'hellow'} label="Profile" />
      </div>

      <div className="more-menu">
        <button className="more-button" onClick={toggleMoreMenu}>
          More
        </button>
        <div className={`more-dropdown ${isMoreMenuOpen ? 'open' : ''}`}>
          <div className="more-item">Option 1</div>
          <div className="more-item">Option 2</div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="nav-item">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SideNav;
