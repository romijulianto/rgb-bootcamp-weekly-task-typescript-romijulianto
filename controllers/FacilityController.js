import Facility from "../models/FacilityModel.js";

export const getFacilities = async (req, res) => {
    try {
        const response = await Facility.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}