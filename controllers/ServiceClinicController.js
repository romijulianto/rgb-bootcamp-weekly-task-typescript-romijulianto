import serviceClinic from "../models/ServiceClinicModel.js";

export const getServiceClinics = async (req, res) => {
    try {
        const response = await serviceClinic.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getServiceClinic By Id */
export const getServiceClinicById = async (req, res) => {
    try {
        const response = await serviceClinic.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Service Clinic */
export const createServiceClinic = async (req, res) => {
    try {
        await serviceClinic.create(req.body);
        res.status(201).json({ message: "Service Clinic Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Service Clinic */
export const updateServiceCllinic = async (req, res) => {
    try {
        await serviceClinic.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Service Clinic Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Service Clinic */
export const deleteServiceClinic = async (req, res) => {
    try {
        await serviceClinic.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Service Clinic Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}