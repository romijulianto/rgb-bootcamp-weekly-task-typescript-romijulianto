import express from "express";
import {
    getFacilities,
    getFacilityById,
    createFacility,
    updateFacility,
    deleteFacility
} from "../controllers/FacilityController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/facilities', getFacilities);
router.get('/facilities/:id', getFacilityById);
router.post('/facilities/', createFacility);
router.patch('/facilities/:id', updateFacility);
router.delete('/facilities/:id', deleteFacility);

export default router;