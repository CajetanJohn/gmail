import React from 'react';
import './Style.css';
import { logo } from '../../../Assets/Images/ExportImages';
import { searchIcon, filterIcon, SettingsIcon, supportIcon, menuIcon } from '../../../Assets/Icons/ExportIcons';

const TopNav = () => {
  return (
    <div className="top-nav">
        <div className='navigation-logo'>
          <menuIcon/>
          <img src={logo} alt='Gmail logo' className='gmail-logo'/>

        </div>
        <div className='navigation-search'>
            <i class="fa fa-search icon search-icon" aria-hidden="true"></i>
            <input type='text' placeholder='Search mail'/>
        </div>
        <div className='navigation-buttons'>

        </div>
    </div>
  );
};

export default TopNav;
