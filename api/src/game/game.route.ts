import express from 'express';
import { updateGame } from "./game.controller";

const router = express.Router();

router.get('/', updateGame);

export default router;
