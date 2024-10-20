import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PasswordForm from "./PasswordForm";
import PasswordList from "./PasswordList";
import "./PasswordKeeper.css";

function PasswordKeeper() {
    const [passwords, setPasswords] = useState(() => {
        const savedPasswords = localStorage.getItem("passwords");
        return savedPasswords ? JSON.parse(savedPasswords) : [];
    });
    const [search, setSearch] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem("passwords", JSON.stringify(passwords));
    }, [passwords]);

    const addPassword = (title, password) => {
        if (editIndex !== null) {
            const updatedPasswords = [...passwords];
            updatedPasswords[editIndex] = { title, password };
            setPasswords(updatedPasswords);
            setEditIndex(null);
        } else {
            setPasswords([...passwords, { title, password }]);
        }
    };

    const deletePassword = (index) => {
        const updatedPasswords = passwords.filter((_, i) => i !== index);
        setPasswords(updatedPasswords);
    };

    const editPassword = (index) => {
        setEditIndex(index);
    };

    const filteredPasswords = passwords.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="App">
            <h1>Password Keeper</h1>
            <h2>Total Passwords: {passwords.length}</h2>
            <SearchBar search={search} setSearch={setSearch} />
            <PasswordForm addPassword={addPassword} editIndex={editIndex} passwords={passwords} />
            <h3>All Passwords:</h3>
            <PasswordList passwords={filteredPasswords} onDelete={deletePassword} onEdit={editPassword} />
        </div>
    );
}

export default PasswordKeeper;
