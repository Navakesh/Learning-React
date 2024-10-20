import React, { useState, useEffect } from 'react';

function PasswordForm({ addPassword, editIndex, passwords }) {
    const [title, setTitle] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (editIndex !== null && passwords[editIndex]) {
            setTitle(passwords[editIndex].title);
            setPassword(passwords[editIndex].password);
        }
    }, [editIndex, passwords]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !password) {
            setError('Please fill in both fields.');
            return;
        }
        addPassword(title, password);
        setTitle('');
        setPassword('');
        setError('');
    };

    const handleInputChange = (e, setter) => {
        setError(''); // Clear error on input change
        setter(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div>
                <label>Title: </label>
                <input
                    id="titleInput"
                    type="text"
                    value={title}
                    onChange={(e) => handleInputChange(e, setTitle)}
                    autoComplete="off"
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                    id="passwordInput"
                    type="password"
                    value={password}
                    onChange={(e) => handleInputChange(e, setPassword)}
                    autoComplete="off"
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Add</button>
        </form>
    );
}

export default PasswordForm;
