import express from "express";
import { getServiceClinics } from "../controllers/ServiceClinicController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/service_clinic', getServiceClinics);

export default router;