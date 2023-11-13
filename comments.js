//Create Web server
const express = require('express');
const app = express();

// Create a route handler
// app.get(path, callback)
// app.post(path, callback)
// app.put(path, callback)
// app.delete(path, callback)
app.get('/', (req, res) => {
    res.send('Hi there!');
});

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});