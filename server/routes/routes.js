
import express from 'express';

// importing model
import User from '../models/user.js';

// initialize router
const router = express.Router();

// routes
// get
router.get('/', async (req, res) => {
    res.send('Your server is ready!');
});

// post
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(200).json({ success: false, message: 'Invalid email' });
        }

        // Validate password
        if(user.password !== password) {
            return res.status(200).json({ success: false, message: 'Invalid password' });
        }

        // If email and password are valid, generate token and send response
        // You can use any JWT library for token generation

        res.status(200).json({ success: true, message: 'Login successful', });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Register route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user with the same username exists
        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return res.status(200).json({ success: false, message: 'User already exists' });
        }

        // Check if user with the same email exists
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(200).json({ success: false, message: 'User with this email already exists' });
        }

        // Create a new user
        const newUser = new User({ username, email, password });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// patch
router.patch('/', async (req, res) => {

});

// put
router.put('/', async (req, res) => {

});

// delete
router.delete('/', async (req, res) => {

});


export default router;
