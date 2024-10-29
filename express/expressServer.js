const express = require('express');
const dotenv = require('dotenv');
const createMongoDBConnection = require('../mongoose/mongooseConnection');

// Load environment variables from .env file
dotenv.config();

// Constants
const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is undefined

// Initialize Express app
const app = express();

// Middleware (e.g., JSON parsing)
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Health check endpoint
app.get('/', (req, res) => {
    res.send(`Hello world from PORT ${PORT}`);
});

// Start the server
const startServer = async() => {
    try {
        await createMongoDBConnection();
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error(`❌ Error starting the server: ${err.message}`);
        process.exit(1); // Exit with a failure code
    }
};

// Start the server
startServer();
