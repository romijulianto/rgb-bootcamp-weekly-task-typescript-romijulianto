import express from "express";
import { getFacilities } from "../controllers/FacilityController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/facilities', getFacilities);

export default router;