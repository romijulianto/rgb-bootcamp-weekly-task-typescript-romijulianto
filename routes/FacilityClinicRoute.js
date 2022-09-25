import express from "express";
import {
    getFacilityClinics,
    getFacilityClinicById,
    createFacilityClinic,
    updateFacilityCllinic,
    deleteFacilityClinic
} from "../controllers/FacilityClinicController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/facility_clinic', getFacilityClinics);
router.get('/facility_clinic/:id', getFacilityClinicById);
router.post('/facility_clinic/', createFacilityClinic);
router.patch('/facility_clinic/:id', updateFacilityCllinic);
router.delete('/facility_clinic/:id', deleteFacilityClinic);

export default router;