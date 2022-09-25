import express from "express";
import {
    getDetailTransaction,
    getDetailTransactionById,
    createDetailTransaction,
    updateDetailTransaction,
    deleteDetailTransaction
} from "../controllers/DetailTransactionController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/detail_transaction', getDetailTransaction);
router.get('/detail_transaction/:id', getDetailTransactionById);
router.post('/detail_transaction/', createDetailTransaction);
router.patch('/detail_transaction/:id', updateDetailTransaction);
router.delete('/detail_transaction/:id', deleteDetailTransaction);

export default router;