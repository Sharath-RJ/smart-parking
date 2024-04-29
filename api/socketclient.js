// Import required modules
const ioClient = require('socket.io-client');

// Connect to the chat namespace on the server
const chatSocket = ioClient.connect('http://localhost:3002/');

// Listen for connection acknowledgment
chatSocket.on('connect', () => {
  console.log('Connected to chat namespace');
  
  // Send a message to the server
  setTimeout(()=>{
    chatSocket.emit('unparked',"663005fc8881560001e65c2c");
  }, 2000)
});
// Listen for connection errors
chatSocket.on('connect_error', (error) => {
    console.error('Connection error:', error.message);
  });
  
  // Listen for connection timeouts
  chatSocket.on('connect_timeout', () => {
    console.error('Connection timeout occurred');
  });

// Listen for messages from the server
chatSocket.on('reached', (msg) => {
  console.log('Message from server:', msg);
});
