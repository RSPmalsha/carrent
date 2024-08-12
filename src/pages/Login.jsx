import React, { useState } from 'react';
import '../Styles/Login.css'; // Import the CSS file
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get the stored email and password from localStorage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Check if the entered email and password match the stored values
        if (formData.email === storedEmail && formData.password === storedPassword) {
            console.log("Login successful");
            // Redirect to the home page
            navigate('/home');
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
