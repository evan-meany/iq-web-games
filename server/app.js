const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app (client/build)
app.use(express.static(path.join(__dirname, '../client/build')));

// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// The "catchall" handler: for any request that doesn't match the above, serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
