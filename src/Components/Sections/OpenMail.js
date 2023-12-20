export const OpenMail = ({ mail }) => (
  <div>
    {mail ? (
      <div>
        <h2>{mail.subject}</h2>
        <p>
          <strong>From:</strong> {mail.sender} |{' '}
          <strong>To:</strong> {mail.recipient}
        </p>
        <p>{mail.body}</p>
      </div>
    ) : (
      <p>No email selected</p>
    )}
  </div>
);