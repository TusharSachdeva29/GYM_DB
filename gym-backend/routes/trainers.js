const express = require('express');
const router = express.Router();
const db = require('../db');

// Add Personal Trainer
router.post('/personal', (req, res) => {
  console.log("POST request to /personal received");
  const { TID, Name, Rating, speciality, NumberOfClients } = req.body;
  const query = 'INSERT INTO PersonalTrainer (TID, Name, Rating, speciality, NumberOfClients) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [TID, Name, Rating, speciality, NumberOfClients], (err, result) => {
      if (err) {
          res.status(400).send(err);
          return;
      }
      res.status(201).send('Personal Trainer added');
  });

});



 

// Add General Trainer
router.post('/general', (req, res) => {
    const { TID, Name, Rating, field } = req.body;
    const query = 'INSERT INTO GeneralTrainer (TID, Name, Rating, field) VALUES (?, ?, ?, ?)';
    db.query(query, [TID, Name, Rating, field], (err, result) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send('General Trainer added');
    });
});

// // Get all Personal Trainers
router.get('/personal', (req, res) => {
    const query = 'SELECT * FROM PersonalTrainer';
    db.query(query, (err, rows) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(rows);
    });
});

// // Get all General Trainers
router.get('/general', (req, res) => {
    const query = 'SELECT * FROM GeneralTrainer';
    db.query(query, (err, rows) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(rows);
    });
});


// Backend route for deleting General Trainer
router.delete('/api/generaltrainers/:id', (req, res) => {
  const { id } = req.params;  // Extract the trainer ID from the URL parameter
  const query = "DELETE FROM GeneralTrainer WHERE TID = ?";

  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "General Trainer deleted successfully" });
  });
});


// Backend route for deleting Personal Trainer
router.delete('/api/personaltrainers/:id', (req, res) => {
  const { id } = req.params;  // Extract the trainer ID from the URL parameter
  const query = "DELETE FROM PersonalTrainer WHERE TID = ?";

  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Personal Trainer deleted successfully" });
  });
});



module.exports = router;