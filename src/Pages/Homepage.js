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
    // Change the URL when an email is clicked
    navigate(`/email/${email.id}`);
  };

  useEffect(() => {
    const handlePopstate = () => {
      // Close the opened email when the back button is clicked
      setSelectedEmail(null);
    };

    // Add event listener for the popstate event
    window.addEventListener('popstate', handlePopstate);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <div>
      <h1>Email List</h1>
      <EmailList emails={emails} onSelectEmail={handleSelectEmail} />
    </div>
  );
};

export const OpenMailWrapper = () => {
  const { id } = useParams();
  const email = EmailData.find((email) => email.id === id);
  return <OpenMail selectedEmail={email} />;
};
