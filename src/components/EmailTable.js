// src/components/EmailTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../axiosInstance';

const EmailTable = () =>
{
    const [emails, setEmails] = useState([]);

    useEffect(() =>
    {
        // Fetch email status from the server
        const fetchEmails = async () =>
        {
            try
            {
                const response = await axiosInstance.get('getAllEmail'); // Replace with your API endpoint
                setEmails(response.data.AllEmail);
                console.log(response.data)
            } catch (error)
            {
                console.error('Error fetching emails:', error.message);
            }
        };

        fetchEmails();
    }, []);
    // Format timestamp to a readable string
    const formatTimestamp = (timestamp) =>
    {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };

        return new Date(timestamp).toLocaleString(undefined, options);
    };
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Email Status</h2>
            <table className="table-auto w-full border-collapse border border-green-800">
                <thead>
                    <tr>
                        <th className="border border-green-600 p-2">Recipient</th>
                        <th className="border border-green-600 p-2">Sender</th>
                        <th className="border border-green-600 p-2">Subject</th>
                        <th className="border border-green-600 p-2">Status</th>
                        <th className="border border-green-600 p-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email) => (
                        <tr key={email._id}>
                            <td className="border border-green-600 p-2">{email.recipient}</td>
                            <td className="border border-green-600 p-2">{email.sender}</td>
                            <td className="border border-green-600 p-2">{email.subject}</td>
                            <td className="border border-green-600 p-2">{email.status}</td>
                            <td className="border border-green-600 p-2">{formatTimestamp(email.timestamps)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmailTable;
