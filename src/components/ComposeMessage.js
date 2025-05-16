import React from "react";
import { useState } from "react";
import "./composeMessage.css"

const ComposeMessage = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handleSubmit();
        console.log('Form Data:', {recipient, subject, email});
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Compose New Message</h2>
            <label>
                To:
                <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
            </label>
            <br />
            <label>
                Subject:
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </label>
            <br />
            <textarea 
                rows={8} 
                cols={70}
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <br />
            <button type="submit" >Send</button>
        </form>
    )
}

export default ComposeMessage;