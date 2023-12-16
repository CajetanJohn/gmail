export const OpenMail = ({ selectedEmail }) => (
  <div>
    {selectedEmail ? (
      <div>
        <h2>{selectedEmail.subject}</h2>
        <p>
          <strong>From:</strong> {selectedEmail.sender} |{' '}
          <strong>To:</strong> {selectedEmail.recipient}
        </p>
        <p>{selectedEmail.body}</p>
      </div>
    ) : (
      <p>No email selected</p>
    )}
  </div>
);