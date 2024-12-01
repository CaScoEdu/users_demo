const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// Sample user data (temporary)

let users = [

    { id: 1, name: 'John Doe', age: 30 },

    { id: 2, name: 'Jane Smith', age: 25 },

    // Add more users as needed

];


// Get all users

ROUTER.get('/users', (req, res) => {

    res.json(users);

});


// Get a single user by ID

ROUTER.get('/users/:id', (req, res) => {

    const { id: ID } = req.params;

    const USER = users.find((user) => user.id === parseInt(ID));

    if (!USER) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(USER);

});


// Create a new user

ROUTER.post('/users', (req, res) => {

    const { name: NAME, age: AGE } = req.body;

    // Simple validation

    if (!NAME || !AGE) {
        return res.status(400).json({ message: 'Name and age are required' });
    }

    const NEW_USER = { id: users.length + 1, name: NAME, age: AGE };

    users.push(NEW_USER);

    res.status(201).json(NEW_USER);

});



// Update an existing user by ID

ROUTER.put('/users/:id', (req, res) => {

    const { id: ID } = req.params;

    const { name: NAME, age: AGE } = req.body;

    // Simple validation

    if (!NAME || !AGE) {
        return res.status(400).json({ message: 'Name and age are required' });
    }

    const USER = users.find((user) => user.id === parseInt(ID));

    if (!USER) {
        return res.status(404).json({ message: 'User not found' });
    }

    USER.name = NAME;

    USER.age = AGE;

    res.json(USER);

});



// Delete a user by ID

ROUTER.delete('/users/:id', (req, res) => {

    const { id: ID } = req.params;

    users = users.filter((user) => user.id !== parseInt(ID));

    res.sendStatus(204);

});


module.exports = ROUTER;