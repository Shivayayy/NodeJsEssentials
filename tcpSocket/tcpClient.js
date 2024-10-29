const net = require('net');
const dotenv = require('dotenv');

dotenv.config();
PORT = process.env.PORT;
HOST = process.env.HOST;

const client = net.createConnection(PORT,HOST,(Socket)=>{
    console.log('Connected to server');
    client.write(`Hello server`);
});

client.on('data',(data)=>{
    console.log(`Data sent by server : ${data}`);
    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server');
});

client.on('error', (err) => {
    console.error(`Client error: ${err.message}`);
});