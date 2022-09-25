import express from "express";
import {
    getClinics,
    getClinicById,
    createClinic,
    updateClinic,
    deleteClinic
} from "../controllers/ClinicContoller.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route clinic crud */
router.get('/clinics', getClinics);
router.get('/clinics/:id', getClinicById);
router.post('/clinics/', createClinic);
router.patch('/clinics/:id', updateClinic);
router.delete('/clinics/:id', deleteClinic);

export default router;