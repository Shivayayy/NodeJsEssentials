// db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const createMongoDBConnection = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.info('✅ Successfully connected to MongoDB');
    } catch (error) {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure code
    }
};

// Export the connection function if needed in other modules
module.exports = createMongoDBConnection;
