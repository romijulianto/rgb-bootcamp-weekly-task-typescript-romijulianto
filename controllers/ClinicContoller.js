import Clinic from "../models/ClinicModel.js";

export const getClinics = async (req, res) => {
    try {
        const response = await Clinic.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getClinic By Id */
export const getClinicById = async (req, res) => {
    try {
        const response = await Clinic.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Clinic */
export const createClinic = async (req, res) => {
    try {
        await Clinic.create(req.body);
        res.status(201).json({ message: "Clinic Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Clinic */
export const updateClinic = async (req, res) => {
    try {
        await Clinic.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Clinic Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Clinic */
export const deleteClinic = async (req, res) => {
    try {
        await Clinic.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Clinic Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}