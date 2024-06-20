const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
const uri = 'mongodb+srv://pawangupta:jurnKsANuhOUNjFP@taskmanager.y7dr383.mongodb.net/?retryWrites=true&w=majority&appName=taskmanager'
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected...');
});

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
