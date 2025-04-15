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

        // Simulate successful registration
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
        <div style={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px #ccc'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px'
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px'
    },
    error: {
        color: 'red',
        marginTop: '10px'
    },
    success: {
        color: 'green',
        marginTop: '10px'
    }
};

export default RegForm;
