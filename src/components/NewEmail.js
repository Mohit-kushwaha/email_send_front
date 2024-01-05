// src/components/NewEmail.js
import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../axiosInstance';

const NewEmail = () =>
{
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) =>
    {

        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () =>
    {
        try
        {
            if (selectedFile)
            {
                console.log(selectedFile)
                const formData = new FormData();
                formData.append('excelFile', selectedFile);

                // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for file upload
                const response = await axiosInstance.post('send-email', formData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });

                if (response.status === 200)
                {
                    console.log('File uploaded successfully.');
                } else
                {
                    console.error('File upload failed.');
                }
            } else
            {
                console.error('No file selected.');
            }
        } catch (error)
        {
            console.error('Error uploading file:', error.message);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">New Email</h1>

            <input type="file" onChange={handleFileChange} accept=".xlsx" />

            <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-4">
                Upload
            </button>
        </div>
    );
};

export default NewEmail;
