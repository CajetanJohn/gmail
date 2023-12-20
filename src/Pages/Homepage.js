import React, { useState, useEffect } from 'react';
import {EmailData} from '../Utils/Data/DataFetch'
import {OpenMail} from '../Components/Sections/OpenMail';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

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

export const Homepage = () => {
  const [emails, setEmails] = useState(EmailData);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const navigate = useNavigate();

  const handleSelectEmail = (email) => {
    setSelectedEmail(email);
  };
  return (
    <div>
      <h1>Email List</h1>
      {!selectedEmail ? (
        <EmailList emails={emails} onSelectEmail={handleSelectEmail} />
      ):(
        <OpenMail mail={selectedEmail}/>
      )}
      
    </div>
  );
};

