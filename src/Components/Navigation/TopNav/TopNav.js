import React from 'react';
import './Style.css';
import { logo } from '../../../Assets/Images/ExportImages';
import { SearchIcon, FilterIcon, SettingsIcon, SupportIcon, MenuIcon } from '../../../Assets/Icons/ExportIcons';

const TopNav = () => {
  return (
    <div className="top-nav">
        <div className='navigation-logo'>
          <MenuIcon className='icon'/>
          <img src={logo} alt='Gmail logo' className='gmail-logo'/>
        </div>
        <div className='navigation-search'>
          <SearchIcon className='icon'/>
          <input type='text' placeholder='Search mail' className='search-input'/>
          <FilterIcon className='icon'/>
        </div>
        <div className='navigation-buttons'>

        </div>
    </div>
  );
};

export default TopNav;
