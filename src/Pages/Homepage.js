import React, { useState, useEffect } from 'react';
import {OpenMail} from '../Components/Sections/OpenMail';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setEmails, selectEmail, deleteEmail, toggleReadStatus } from '../Utils/Hooks/Actions';
import SideNav from '../Components/Navigation/SideNav/SideNav';
import TopNav from '../Components/Navigation/TopNav/TopNav';
import './Style.css';

export const EmailList = ({ emails, onSelectEmail }) => (
  <ul className='email-list'>
    {emails.map((email) => (
      <li key={email.id} onClick={() => onSelectEmail(email)}>
        <div>{email.sender}</div>
        <div>{email.subject}</div>
      </li>
    ))}
  </ul>
);


const Homepage = () => {
  const emails = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, toggleShow] = useState(false);
  
  const ExpandSideNav =()=>{
    return toggleShow(!show);
  }


  const handleEmailClick = (email) => {
    try{dispatch(selectEmail(email));}

    catch(error){console.warn(error);}

    finally{navigate(`/email/${email.id}`)}
    
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteEmail(id));
    window.history.pushState(null, '', '/email');
  };

  const handleToggleReadStatus = (id) => {
    dispatch(toggleReadStatus(id));
  };

  return (
    <div className='Ui'>
      <TopNav onClick={ExpandSideNav}/>
      <div className='body'>
        <SideNav toggleSideNav={show}/>
        <EmailList emails={emails} onSelectEmail={handleEmailClick}/>
      </div>
    </div>
  );
};

export default Homepage;
