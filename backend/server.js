const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/zarcuit', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for support queries
const supportSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const SupportQuery = mongoose.model('SupportQuery', supportSchema);

// API endpoint to submit a support query
app.post('/api/support', async (req, res) => {
    const { name, email, message } = req.body;
    const newQuery = new SupportQuery({ name, email, message });
    await newQuery.save();
    res.status(201).json({ success: true, message: 'Query submitted successfully' });
});

// API endpoint to get all support queries
app.get('/api/support', async (req, res) => {
    const queries = await SupportQuery.find();
    res.status(200).json(queries);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});