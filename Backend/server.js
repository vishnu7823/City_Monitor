require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(bodyParser.json());

// Routes
app.use('/api/admin', adminRoutes);

app.use('/api', authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//simple text
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
