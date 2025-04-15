import React, { useState } from 'react';

const RegForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required');
            setSuccess('');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setSuccess('');
            return;
        }

        setSuccess('Registration successful!');
        setError('');
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>Create Account</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Register</button>

                {error && <p style={styles.error}>{error}</p>}
                {success && <p style={styles.success}>{success}</p>}
            </form>
        </div>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f4f7fc',
        padding: '20px',
    },
    form: {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '24px',
        color: '#333',
    },
    input: {
        padding: '12px 15px',
        marginBottom: '15px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '16px',
        outline: 'none',
        transition: 'border-color 0.3s',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 15px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    error: {
        marginTop: '10px',
        color: '#dc3545',
        fontSize: '14px',
        textAlign: 'center',
    },
    success: {
        marginTop: '10px',
        color: '#28a745',
        fontSize: '14px',
        textAlign: 'center',
    }
};

export default RegForm;
