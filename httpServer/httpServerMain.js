const http = require('http');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3000; // Fallback to a default port if PORT is not set

const startHttpServer = () => {
    try {
        // Create the HTTP server
        const server = http.createServer((req, res) => {
            res.setHeader('Content-Type', 'application/json');

            // Define route handling
            if (req.url === '/' && req.method === 'GET') {
                res.writeHead(200);
                res.end(JSON.stringify({ message: `Hello world from PORT ${PORT}` }));
            } else {
                // Handle unknown routes
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Route not found' }));
            }
        });

        // Start the server and log a success message
        server.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        // Improved error logging
        console.error(`❌ Error starting the server: ${error.message}`);
        process.exit(1); // Exit the process with failure status code
    }
};

// Start the HTTP server
startHttpServer();
