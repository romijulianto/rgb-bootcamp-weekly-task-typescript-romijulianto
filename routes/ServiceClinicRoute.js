import express from "express";
import {
    getServiceClinics,
    getServiceClinicById,
    createServiceClinic,
    updateServiceCllinic,
    deleteServiceClinic
} from "../controllers/ServiceClinicController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/service_clinic', getServiceClinics);
router.get('/service_clinic/:id', getServiceClinicById);
router.post('/service_clinic/', createServiceClinic);
router.patch('/service_clinic/:id', updateServiceCllinic);
router.delete('/service_clinic/:id', deleteServiceClinic);

export default router;