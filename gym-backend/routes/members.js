const express = require("express");
const router = express.Router();
const db = require('../db');


// Get all members
router.get("/get-member", (req, res) => {
  const query = "SELECT * FROM Members";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a new member
router.post("/", (req, res) => {
  const { Name, Age, Gender, MStartDate, MEndDate, MDuration } = req.body;
  const query = `
    INSERT INTO Members (Name, Age, Gender, MStartDate, MEndDate, MDuration)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [Name, Age, Gender, MStartDate, MEndDate, MDuration], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Member added successfully", id: result.insertId });
  });
});

// Update a member
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { Name, Age, Gender, MStartDate, MEndDate, MDuration } = req.body;
  const query = `
    UPDATE Members
    SET Name = ?, Age = ?, Gender = ?, MStartDate = ?, MEndDate = ?, MDuration = ?
    WHERE MID = ?
  `;
  db.query(query, [Name, Age, Gender, MStartDate, MEndDate, MDuration, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Member updated successfully" });
  });
});

// Delete a member
router.delete('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Members WHERE MID = ?";
  
  // Assuming db is a connection to your database
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Member deleted successfully" });
  });
});

module.exports = router;
