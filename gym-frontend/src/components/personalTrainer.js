import React, { useState } from 'react';
import axios from 'axios';

const PersonalTrainerForm = () => {
    const [TID, setTID] = useState('');
    const [Name, setName] = useState('');
    const [Rating, setRating] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [NumberOfClients, setNumberOfClients] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trainerData = { TID, Name, Rating, speciality, NumberOfClients };
        console.log(trainerData);  // Log the data you're sending
    
        try {
            const res = await axios.post('http://localhost:5000/api/trainers/personal', trainerData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status === 201) {
                alert('Personal Trainer added');
            } else {
                alert('Failed to add Personal Trainer');
            }
        } catch (error) {
            console.error(error);  // Log the error for debugging
            alert('Error: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={TID} onChange={(e) => setTID(e.target.value)} placeholder="TID" required />
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={Rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" required />
            <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} placeholder="Speciality" required />
            <input type="number" value={NumberOfClients} onChange={(e) => setNumberOfClients(e.target.value)} placeholder="Number of Clients" required />
            <button type="submit">Add Personal Trainer</button>
        </form>
    );
};

export default PersonalTrainerForm;
