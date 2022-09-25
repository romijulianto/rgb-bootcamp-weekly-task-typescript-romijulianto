import Service from "../models/ServiceModel.js";

export const getServices = async (req, res) => {
    try {
        const response = await Service.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}