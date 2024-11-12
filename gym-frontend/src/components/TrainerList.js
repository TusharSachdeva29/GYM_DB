import React, { useEffect, useState } from 'react';

const TrainerList = ({ type }) => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchTrainers = async () => {
            const res = await fetch(`http://localhost:3000/api/trainers/${type}`);
            const data = await res.json();
            setTrainers(data);
        };
        fetchTrainers();
    }, [type]);

    return (
        <div>
            <h2>{type === 'personal' ? 'Personal Trainers' : 'General Trainers'}</h2>
            <ul>
                {trainers.map((trainer) => (
                    <li key={trainer.TID}>{trainer.Name} - {trainer.Rating} - {trainer.speciality || trainer.field}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrainerList;
