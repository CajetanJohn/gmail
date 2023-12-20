import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmail, toggleReadStatus } from '../../Utils/Hooks/Actions.js';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

const OpenMail = () => {
  const selectedEmail = useSelector((state) => state.selectedEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    if (selectedEmail) {
      dispatch(deleteEmail(selectedEmail.id));
      navigate('/home')
    }
  };

  const handleToggleReadStatus = () => {
    if (selectedEmail) {
      dispatch(toggleReadStatus(selectedEmail.id));
    }
  };

  return (
    <div>
      <h2>Email Details</h2>
      {selectedEmail ? (
        <div>
          <p>Subject: {selectedEmail.subject}</p>
          <p>Body: {selectedEmail.body}</p>
          <p>Read: {selectedEmail.read ? 'Yes' : 'No'}</p>
          <button onClick={handleDeleteClick}>Delete</button>
          <button onClick={handleToggleReadStatus}>Toggle Read</button>
        </div>
      ) : (
        <p>No email selected</p>
      )}
    </div>
  );
};

export default OpenMail;
