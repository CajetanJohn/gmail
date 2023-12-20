import React, { useState, useEffect } from 'react';
import {OpenMail} from '../Components/Sections/OpenMail';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setEmails, selectEmail, deleteEmail, toggleReadStatus } from '../Utils/Hooks/Actions';

export const EmailList = ({ emails, onSelectEmail }) => (
  <ul>
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


  const handleEmailClick = (email) => {
    try{dispatch(selectEmail(email));}
    catch(error){console.log(error);}
    finally{console.log(email);}
    navigate(`/email/${email.id}`)
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteEmail(id));
    window.history.pushState(null, '', '/email');
  };

  const handleToggleReadStatus = (id) => {
    dispatch(toggleReadStatus(id));
  };

  return (
    <div>
      <h1>Emails</h1>
      <EmailList emails={emails} onSelectEmail={handleEmailClick}/>
    </div>
  );
};

export default Homepage;
