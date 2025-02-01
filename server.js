// server.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
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
    items: [String] // Array of item names or IDs
});

const Inventory = mongoose.model('Inventory', inventorySchema);

// API endpoint to get a user's inventory
app.get('/api/inventory/:userId', async (req, res) => {
    const inventory = await Inventory.findOne({ userId: req.params.userId });
    if (!inventory) return res.status(404).send('Inventory not found');
    res.send(inventory);
});

// API endpoint to update a user's inventory
app.post('/api/inventory/:userId', async (req, res) => {
    let inventory = await Inventory.findOne({ userId: req.params.userId });
    if (!inventory) {
        inventory = new Inventory({ userId: req.params.userId, items: req.body.items });
    } else {
        inventory.items = req.body.items;
    }
    await inventory.save();
    res.send(inventory);
});

// Define a schema and model for user data
const userSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    coins: { type: Number, default: 0 }
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

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));