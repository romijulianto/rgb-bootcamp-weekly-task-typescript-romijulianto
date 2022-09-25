import express from "express";
import { getFacilityClinics } from "../controllers/FacilityClinicController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/facility_clinic', getFacilityClinics);

export default router;