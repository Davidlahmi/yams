import express from 'express';
import userRoutes from './user/user.route';
import pastryRoutes from './pastry/pastry.route'
import gameRoutes from './game/game.route'
import connectDB from "./db/db";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())
app.use('/users', userRoutes);
app.use('/pastries', pastryRoutes);
app.use('/games', gameRoutes);

connectDB().then(() => {
    app.listen(3001, () => {
        console.log('Server running on http://localhost:3001');
    });
});
