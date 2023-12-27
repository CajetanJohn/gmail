import React from 'react';
import './Style.css';
import { logo } from '../../../Assets/Images/ExportImages';
//import { AiOutlineSearch } from 'react-icons/ai';
//import { MdInbox, MdStar, MdAccessTime, MdSend, MdDrafts, MdExpandMore } from 'react-icons/md';

const TopNav = () => {
  return (
    <div className="top-nav">
        <div className='navigation-logo'>
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
