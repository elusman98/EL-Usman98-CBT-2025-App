// src/api/apiService.js (new or modified file)

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
        throw new Error('Login failed!');
    }
    return response.json(); // Should return user data and a JWT token
};

// You'll create similar functions for fetching questions, saving results, etc.