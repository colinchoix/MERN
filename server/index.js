import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
import menuRoute from './routes/menu.js';

app.get('/', (req, res) => res.send("Home"));
app.use("/menu", menuRoute);

// Connect to mongoDB
const DB_URL = ;//process.env.DB_CONNECTION;
const PORT = 5000;//process.env.PORT || 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB")
        app.listen(PORT, () => console.log("Listening on port " + PORT));
    })
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);