// Homepage.js
import React, { useState, useEffect } from 'react';
import { EmailData } from '../Utils/Data/DataFetch.js';
import FilterForm from '../Components/Forms/FilterForm.js';
import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import OpenMail from '../Components/Sections//OpenMail';

const EmailList = ({ emails }) => (
  <ul>
    {emails.map((email) => (
      <li key={email.id}>
        <Link to={`/home/email/${email.id}`}>
          <div>{email.sender}</div>
          <div>{email.subject}</div>
        </Link>
      </li>
    ))}
  </ul>
);

export const Homepage = () => {
  const [emails, updateEmails] = useState(EmailData);

  function onSearch(results) {
    updateEmails(results);
  }

  return (
    <div>
      <h1>Email List with Updated IDs</h1>
      <FilterForm onSearch={onSearch} />
      <EmailList emails={emails} />
      <Outlet />
    </div>
  );
};


export const OpenMailWrapper = () => {
  const { id } = useParams();
  const email = EmailData.find((email) => email.id === id);
  return <OpenMail email={email} />;
};

