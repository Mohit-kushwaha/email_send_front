// src/components/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import NewEmail from './NewEmail';

const Pages = () =>
{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new-email" element={<NewEmail />} />
            </Routes>
        </div>
    );
};

export default Pages;
