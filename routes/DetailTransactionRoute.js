import express from "express";
import { getDetailTransaction } from "../controllers/DetailTransactionController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/detail_transaction', getDetailTransaction);

export default router;