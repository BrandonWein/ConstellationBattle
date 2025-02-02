// server.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// Use CORS middleware properly
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500'], // Allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true
}));

app.use(express.json());

console.log('Starting server...');

console.log('Attempting to connect to MongoDB...');
console.log('MongoDB URI:', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
        process.exit(1); // Exit the process if the connection fails
    });

console.log('MongoDB connection code executed.');

// Define a schema and model for user inventory
const inventorySchema = new mongoose.Schema({
    userId: String,
    items: [String], // Array of item names or IDs
    constellations: [String], // Array of constellation names or IDs
    equippedConstellation: String
});

const Inventory = mongoose.model('Inventory', inventorySchema);

// API endpoint to update a user's inventory
app.post('/api/inventory/:req.body.sessionId;', async (req, res) => {
    let inventory = await Inventory.findOne({ userId: req.params.sessionId});
    if (!inventory) {
        inventory = new Inventory({ userId: req.params.sessionId, items: req.body.items });
    } else {
        inventory.items = req.body.items;
    }
    await inventory.save();
    res.send(inventory);
});

// API endpoint to add constellations to a user's inventory
app.post('/api/inventory/:userId/constellations', async (req, res) => {
    try {
        const { constellations } = req.body;
        let inventory = await Inventory.findOne({ userId: req.params.userId });
        if (!inventory) {
            inventory = new Inventory({ userId: req.params.userId, constellations });
        } else {
            inventory.constellations = [...new Set([...inventory.constellations, ...constellations])];
        }
        await inventory.save();
        res.json(inventory);
    } catch (err) {
        console.error('Error updating constellations:', err);
        res.status(500).send('Error updating constellations');
    }
});

// Endpoint to add items to a user's inventory
app.post('/api/inventory/:userId/items', async (req, res) => {
    try {
        const { items } = req.body;
        let inventory = await Inventory.findOne({ userId: req.params.userId });
        if (!inventory) {
            inventory = new Inventory({ userId: req.params.userId, items });
        } else {
            inventory.items = [...new Set([...inventory.items, ...items])];
        }
        await inventory.save();
        res.json(inventory);
    } catch (err) {
        console.error('Error adding items to inventory:', err);
        res.status(500).send('Error adding items to inventory');
    }
});

// Define a schema and model for user data
const userSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    coins: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

// Endpoint to increment coins
app.post('/api/coins/increment', async (req, res) => {
    const sessionId = req.body.sessionId; // Get session ID from request
    try {
        const user = await User.findOneAndUpdate(
            { sessionId },
            { $inc: { coins: 1 } },
            { new: true, upsert: true } // Create the user if it doesn't exist
        );
        console.log(`Coin added for session: ${sessionId}. Total coins: ${user.coins}`);
        res.send(user);
    } catch (err) {
        console.error('Error updating coins:', err);
        res.status(500).send('Error updating coins');
    }
});

app.post('/api/coins/decrement', async (req, res) => {
    const sessionId = req.body.sessionId; // Get session ID from request
    try {
        const user = await User.findOneAndUpdate(
            { sessionId },
            { $inc: { coins: -1 } },
            { new: true, upsert: true } // Create the user if it doesn't exist
        );
        console.log(`Coin removed for session: ${sessionId}. Total coins: ${user.coins}`);

        res.send(user);
    } catch (err) {
        console.error('Error updating coins:', err);
        res.status(500).send('Error updating coins');
    }
});


// API endpoint to get available constellations
app.get('/api/constellations', (req, res) => {
    const constellations = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    res.json(constellations);
});

// API endpoint to get constellations from a user's inventory
app.get('/api/inventory/:userId/constellations', async (req, res) => {
    try {
        const inventory = await Inventory.findOne({ userId: req.params.userId });
        if (!inventory) {
            return res.json({ constellations: [] });
        }
        res.json({ constellations: inventory.constellations });
    } catch (err) {
        console.error('Error fetching constellations from inventory:', err);
        res.status(500).send('Error fetching constellations from inventory');
    }
});

let queue = [];

app.post('/queue', (req, res) => {
    const { inQueue } = req.body;
    const userId = req.ip; // Use IP as a simple user identifier

    if (inQueue) {
        if (!queue.includes(userId)) {
            queue.push(userId);
        }
    } else {
        queue = queue.filter(id => id !== userId);
    }

    // Check for match
    let matchFound = false;
    if (queue.length >= 2) {
        matchFound = true;
        // Remove the first two players from the queue
        queue = queue.slice(2);
    }
    
    res.json({ matchFound });
});

app.post('/api/battle', async (req, res) => {
    const { constellation1, constellation2 } = req.body;

    // Example attributes for constellations
    const attributes = {
        Aries: { power: 10, speed: 8 },
        Taurus: { power: 9, speed: 7 },
        // Add attributes for other constellations
    };

    // Simulate battle logic
    const result = simulateBattle(attributes[constellation1], attributes[constellation2]);

    res.json({ winner: result.winner, story: result.story });
});

function simulateBattle(attr1, attr2) {
    // Simple logic to decide winner based on attributes
    const winner = attr1.power + attr1.speed > attr2.power + attr2.speed ? 'Constellation 1' : 'Constellation 2';
    const story = `In an epic battle, ${winner} emerged victorious!`;
    return { winner, story };
}

// Endpoint to equip a constellation
app.post('/api/user/:sessionId/equip', async (req, res) => {
    const { sessionId } = req.params;
    const { constellation } = req.body;

    try {
        // Update the equipped constellation in the database
        await Inventory.findOneAndUpdate(
            { userId: sessionId },
            { $set: { equippedConstellation: constellation } }
        );

        res.status(200).send({ message: 'Constellation equipped successfully!' });
    } catch (error) {
        console.error('Error equipping constellation:', error);
        res.status(500).send({ error: 'Failed to equip constellation' });
    }
});

// Endpoint to get user constellations, equipped constellation, and coins
app.get('/api/user/:sessionId/data', async (req, res) => {
    const { sessionId } = req.params;

    try {
        const user = await User.findOne({ sessionId });

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.status(200).send({
            constellations: user.constellations || [],
            equippedConstellation: user.equippedConstellation || 'None',
            coins: user.coins || 0, // Send coins data from user collection
            wins: user.wins || 0,
            losses: user.losses || 0
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send({ error: 'Failed to fetch user data' });
    }
});

// Endpoint to update battle results
app.post('/api/user/:sessionId/battle-result', async (req, res) => {
    const { sessionId } = req.params;
    const { result } = req.body; // 'win' or 'loss'

    try {
        const user = await User.findOneAndUpdate(
            { sessionId },
            result === 'win' ? { $inc: { wins: 1 } } : { $inc: { losses: 1 } },
            { new: true, upsert: true }
        );

        res.status(200).send({ message: 'Battle result updated successfully!' });
    } catch (error) {
        console.error('Error updating battle result:', error);
        res.status(500).send({ error: 'Failed to update battle result' });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));