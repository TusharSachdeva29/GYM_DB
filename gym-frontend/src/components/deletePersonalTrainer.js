import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalTrainerDelete = () => {
  const [personalTrainers, setPersonalTrainers] = useState([]);

  // Fetch personal trainers data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/trainers/personal')  // Fetch the list of personal trainers from backend
      .then(response => {
        setPersonalTrainers(response.data);
      })
      .catch(error => {
        console.error('Error fetching Personal Trainers:', error);
        alert('Error fetching Personal Trainers');
      });
  }, []);

  // Handle deleting a personal trainer
  const deletePersonalTrainer = (trainerId) => {
    if (window.confirm('Are you sure you want to delete this Personal Trainer?')) {
      // Send delete request to backend
      axios.delete(`http://localhost:5000/api/trainers/api/personaltrainers/${trainerId}`)
        .then(response => {
          // Remove the deleted trainer from the UI
          setPersonalTrainers(personalTrainers.filter(trainer => trainer.TID !== trainerId));
          alert(response.data.message); // Display success message from backend
        })
        .catch(error => {
          console.error('Error deleting Personal Trainer:', error);
          alert('Error deleting Personal Trainer');
        });
    }
  };

  return (
    <div>
      <h2>Personal Trainers</h2>
      <ul>
        {personalTrainers.map((trainer) => (
          <li key={trainer.TID}>
            <p>{trainer.Name} - {trainer.Rating}</p>
            <button onClick={() => deletePersonalTrainer(trainer.TID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalTrainerDelete;
