import express from "express";
import { getServices } from "../controllers/ServiceController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/services', getServices);

export default router;