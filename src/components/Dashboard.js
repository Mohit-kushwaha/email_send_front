// src/components/Dashboard.js
import React from 'react';
import EmailTable from './EmailTable';

const Dashboard = () =>
{
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Email Dashboard</h1>
            <EmailTable />
        </div>
    );
};

export default Dashboard;
