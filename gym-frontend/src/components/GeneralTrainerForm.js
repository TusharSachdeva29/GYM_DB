import React, { useState } from 'react';
import axios from 'axios';  // Import axios

const GeneralTrainerForm = () => {
    const [TID, setTID] = useState('');
    const [Name, setName] = useState('');
    const [Rating, setRating] = useState('');
    const [field, setField] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trainerData = { TID, Name, Rating, field };
        console.log(trainerData);  // Log the data you're sending

        try {
            const res = await axios.post('http://localhost:5000/api/trainers/general', trainerData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.status === 201) {
                alert('General Trainer added');
            } else {
                alert('Failed to add General Trainer');
            }
        } catch (error) {
            console.error(error);  // Log the error for debugging
            alert('Error: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={TID} 
                onChange={(e) => setTID(e.target.value)} 
                placeholder="Trainer ID (TID)" 
                required 
            />
            <input 
                type="text" 
                value={Name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Trainer Name" 
                required 
            />
            <input 
                type="number" 
                value={Rating} 
                onChange={(e) => setRating(e.target.value)} 
                placeholder="Rating" 
                required 
            />
            <input 
                type="text" 
                value={field} 
                onChange={(e) => setField(e.target.value)} 
                placeholder="Field of Expertise" 
                required 
            />
            <button type="submit">Add General Trainer</button>
        </form>
    );
};

export default GeneralTrainerForm;
