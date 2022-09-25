import Facility from "../models/FacilityModel.js";

export const getFacilities = async (req, res) => {
    try {
        const response = await Facility.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getFacilities By Id */
export const getFacilityById = async (req, res) => {
    try {
        const response = await Facility.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Facility */
export const createFacility = async (req, res) => {
    try {
        await Facility.create(req.body);
        res.status(201).json({ message: "Facility Clinic Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Facility */
export const updateFacility = async (req, res) => {
    try {
        await Facility.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Facility Clinic Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Facility */
export const deleteFacility = async (req, res) => {
    try {
        await Facility.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Facility Clinic Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}