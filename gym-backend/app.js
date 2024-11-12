const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const memberRoutes = require("./routes/members");
const trainerRoutes = require("./routes/trainers");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/members", memberRoutes); // Correct usage of route middleware
app.use("/api/trainers", trainerRoutes);

// Default route for testing
app.get("/", (req, res) => {
  res.send("Gym backend is running!");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
