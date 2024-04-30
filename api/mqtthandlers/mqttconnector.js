const mqtt = require("mqtt")

const client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('message', function (topic, message) {
    console.log('Received message on topic:', topic, 'with message:', message.toString());
});

client.publish("publish","parked/6630819214c8d95f2a93eca4");

// Event handler for when the client disconnects
client.on('close', function () {
    console.log('Disconnected from MQTT broker');
});

// Handle errors
client.on('error', function (err) {
    console.error('Error:', err);
});