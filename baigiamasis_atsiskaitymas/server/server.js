import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './config/db.js';
import cors from 'cors';

import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from './controlers/user.controler.js';

import { userExist } from './middlewares/error.js';

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connecting to MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());

app.post('/users', userExist, createUser);

app.get('/users', getUsers);

app.put('/users/:id', updateUser);

app.delete('/users/:id', userExist, deleteUser);

// Starting server
app.listen(PORT, () => console.log('Server is running on PORT: ' + PORT));
