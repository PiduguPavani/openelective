const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
// Dummy database (replace this with a real database like MongoDB or MySQL)
const users = [];

// Registration endpoint
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Check if email already exists
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Save user to the database
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

// Authentication endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find(user => user.email === email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
