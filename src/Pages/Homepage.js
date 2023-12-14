import React, { useState, useEffect } from "react";
import { EmailData } from "../Utils/Data/DataFetch.js";
import FilterForm from "../Components/Forms/FilterForm.js"

const Homepage = () => {
  const [emails, updateEmails] = useState(EmailData);

  function onSearch(results){
    updateEmails(results);
  }

  return (
    <div>
      <h1>Email List with Updated IDs</h1>
      <FilterForm onSearch={onSearch}/>
      <ul>
        {emails.map(email => (
          <li key={email.id}>
            <div>{email.id}</div>
            <strong>{email.subject}</strong>
            <p>
              <strong>From:</strong> {email.sender} | <strong>To:</strong> {email.recipient}
            </p>
            <p>{email.body}</p>
            <p>
              <strong>Timestamp:</strong> {email.timestamp} | <strong>Signed By:</strong> {email.signed_by}
            </p>
            <p>
              <strong>Security:</strong> {email.security} | <strong>Starred:</strong> {email.starred.toString()}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
