import express from 'express';
import { createUser, signin, getAllWinners, getOneUser } from "./user.controller";

const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', signin);
router.get('/winners', getAllWinners);
router.get('/:userId', getOneUser);

export default router;
