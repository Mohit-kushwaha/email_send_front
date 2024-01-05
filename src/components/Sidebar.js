// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () =>
{
    return (
        <div className="bg-gray-200 h-screen w-1/5 p-4">
            <ul>
                <li className="mb-4">
                    <NavLink to="/" className="text-blue-600 hover:underline">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/new-email" className="text-blue-600 hover:underline">New Email</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
