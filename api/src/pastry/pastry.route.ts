import express from 'express';
import { getPastries, getNoPastry } from "./pastry.controller";

const router = express.Router();

router.get('/', getPastries);
router.get('/empty', getNoPastry);

export default router;
