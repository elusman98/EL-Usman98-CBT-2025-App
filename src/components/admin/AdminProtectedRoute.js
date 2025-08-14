// src/components/AdminProtectedRoute.js

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom'; // Assuming you use React Router

function AdminProtectedRoute({ children }) {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />; // Not logged in
    }

    if (currentUser.role !== 'admin') {
        return <Navigate to="/unauthorized" />; // Logged in, but not an admin
    }

    return children; // Is an admin, render the requested component
}