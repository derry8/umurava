require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const db = require('./config/Db');

// Import routes
const challengeRoutes = require('./routes/ChallengeRouter');
const userRoutes = require('./routes/UserRoute');
const ParticipantRoutes = require('./routes/ParticipantRouter')

// Connect to the database
db();

// Middleware
app.use(express.json());
const corsOptions = {
  origin: 'https://umurava-chi.vercel.app',
  methods: 'GET,POST,PUT,DELETE',
};

app.use(cors(corsOptions)); 

// Use routes
app.use('/umurava', challengeRoutes);
app.use('/umurava',userRoutes)
app.use('/umurava',ParticipantRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is created and running on port: ${PORT}`);
});
