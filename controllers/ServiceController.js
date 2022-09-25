import Service from "../models/ServiceModel.js";

export const getServices = async (req, res) => {
    try {
        const response = await Service.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getService By Id */
export const getServiceById = async (req, res) => {
    try {
        const response = await Service.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Service */
export const createService = async (req, res) => {
    try {
        await Service.create(req.body);
        res.status(201).json({ message: "Service Clinic Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Facility */
export const updateService = async (req, res) => {
    try {
        await Service.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Service Clinic Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Facility */
export const deleteService = async (req, res) => {
    try {
        await Service.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Service Clinic Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}