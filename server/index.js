
// constants
const PORT = 5000;
const DATABASE_URI = "mongodb://localhost:27017";

// dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
import routes from './routes/routes.js';

// create connection to database
mongoose.connect(DATABASE_URI);
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('connected', () => console.log('Connected to Database'));

// initiating the rest api
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// initialize routes
app.use('/api/v1/user', routes);

// starting our server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
