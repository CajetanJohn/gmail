// src/components/SideNav.js
import React, { useState } from 'react';
import './Style.css'

const SideNav = ({toggleSideNav}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const menuList = [1,2,3,4,5];


  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const expandMenu=(state)=>{
    return setHovered(state)
  }

  return (
    <div className={`sidenav ${toggleSideNav ? 'open' : 'closed'} ${hovered ? 'hovered' : ''}`}>

      <div className="nav-items" >
        <ul>
          {menuList.map((item, index)=>{
            return (<li className='nav-item' onMouseOver={()=>{expandMenu(true)}} onMouseOut={()=>{expandMenu(false)}} key={index}>{item}</li>)
          })}
        </ul>

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
