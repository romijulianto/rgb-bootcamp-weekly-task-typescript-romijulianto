import express from "express";
import {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService
} from "../controllers/ServiceController.js";

/* inisiasi route */
const router = express.Router();

/* endpoint route */
router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.post('/services/', createService);
router.patch('/services/:id', updateService);
router.delete('/services/:id', deleteService);

export default router;