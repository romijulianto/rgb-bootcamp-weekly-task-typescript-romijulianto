import facilityClinic from "../models/FacilityClinicModel.js";

export const getFacilityClinics = async (req, res) => {
    try {
        const response = await facilityClinic.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}