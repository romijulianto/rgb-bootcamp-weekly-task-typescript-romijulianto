import facilityClinic from "../models/FacilityClinicModel.js";

export const getFacilityClinics = async (req, res) => {
    try {
        const response = await facilityClinic.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getFacilityClinic By Id */
export const getFacilityClinicById = async (req, res) => {
    try {
        const response = await facilityClinic.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Facility Clinic */
export const createFacilityClinic = async (req, res) => {
    try {
        await facilityClinic.create(req.body);
        res.status(201).json({ message: "Facility Clinic Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Facility Clinic */
export const updateFacilityCllinic = async (req, res) => {
    try {
        await facilityClinic.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Facility Clinic Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Facility Clinic */
export const deleteFacilityClinic = async (req, res) => {
    try {
        await facilityClinic.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Facility Clinic Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}