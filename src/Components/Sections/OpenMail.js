// EmailDetail.js
import React from 'react';

const OpenMail = ({ email }) => {
  if (!email) {
    return <div>No email selected</div>;
  }

  return (
    <div>
      <h2>{email.subject}</h2>
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
    </div>
  );
};

export default OpenMail;
