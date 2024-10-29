// db.js
const mongoose = require('mongoose');

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
        process.exit(1); 
    }
};

module.exports = createMongoDBConnection;
