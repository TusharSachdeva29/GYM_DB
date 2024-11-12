import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeneralTrainerDelete = () => {
  const [generalTrainers, setGeneralTrainers] = useState([]);

  // Fetch general trainers data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/trainers/general')  // Fetch the list of general trainers from backend
      .then(response => {
        setGeneralTrainers(response.data);
      })
      .catch(error => {
        console.error('Error fetching General Trainers:', error);
        alert('Error fetching General Trainers');
      });
  }, []);

  // Handle deleting a general trainer
  const deleteGeneralTrainer = (trainerId) => {
    if (window.confirm('Are you sure you want to delete this General Trainer?')) {
      // Send delete request to backend
      axios.delete(`http://localhost:5000/api/trainers/api/generaltrainers/${trainerId}`)
        .then(response => {
          // Remove the deleted trainer from the UI
          setGeneralTrainers(generalTrainers.filter(trainer => trainer.TID !== trainerId));
          alert(response.data.message); // Display success message from backend
        })
        .catch(error => {
          console.error('Error deleting General Trainer:', error);
          alert('Error deleting General Trainer');
        });
    }
  };

  return (
    <div>
      <h2>General Trainers</h2>
      <ul>
        {generalTrainers.map((trainer) => (
          <li key={trainer.TID}>
            <p>{trainer.Name} - {trainer.Rating}</p>
            <button onClick={() => deleteGeneralTrainer(trainer.TID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneralTrainerDelete;
