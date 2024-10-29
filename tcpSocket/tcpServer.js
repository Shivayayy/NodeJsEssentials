const net = require('net');
const dotenv = require('dotenv');

dotenv.config();

const PORT =process.env.PORT;

const server = net.createServer((Socket)=>{
    console.log('Client connected');
    Socket.on('data',(data)=>{
        console.log(`Data send by the sender : ${data}`);
        Socket.write(`Echo : ${data}`);
    })
    Socket.on('end',()=>{
        console.log(`Connection closed `);
    })
    Socket.on('error',(error)=>{
        console.log(`Some Error occured : ${error}`);
    })
})

server.listen(PORT,()=>{
    console.log(`TCP Server running on port ${PORT}`);
})