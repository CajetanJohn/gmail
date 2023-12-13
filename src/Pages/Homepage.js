import React, {useState, useEffect} from "react";
import { EmailData } from "../Data/api";

const Homepage=()=>{
    const [emails, updateEmails]=useState(EmailData)
    useEffect(()=>{
        updateEmails(EmailData);
    }, [])
    return (
        <div>
            <h1>Email List with Updated IDs</h1>
            <ul>
            {emails.map(email => (
                <li key={email.id}>
                  <li>{email.id}</li>
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
}
export default Homepage;