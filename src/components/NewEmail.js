// src/components/NewEmail.js
import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const NewEmail = () =>
{
    const navigate = useNavigate()
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
                const formData = new FormData();
                formData.append('excelFile', selectedFile);
                const response = await axiosInstance.post('send-email', formData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });

                if (response.status === 200)
                {
                    navigate('/')
                    console.log('File uploaded successfully.');
                } else
                {
                    alert('File upload failed.');
                }
            } else
            {
                alert('No file selected.');
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
