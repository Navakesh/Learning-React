import React from 'react';

function PasswordList({ passwords, onDelete, onEdit }) {
    return (
        <ul>
            {passwords.map((p, index) => (
                <li key={index}>
                    <strong>{p.title}</strong>: {p.password}
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default PasswordList;
