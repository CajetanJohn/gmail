export const setEmails = (emails) => ({
    type: 'SET_EMAILS',
    payload: emails,
  });
  
  export const selectEmail = (email) => ({
    type: 'SELECT_EMAIL',
    payload: email,
  });
  
  export const deleteEmail = (id) => ({
    type: 'DELETE_EMAIL',
    payload: id,
  });
  
  export const toggleReadStatus = (id) => ({
    type: 'TOGGLE_READ_STATUS',
    payload: id,
  });
  