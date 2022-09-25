import serviceClinic from "../models/ServiceClinicModel.js";

export const getServiceClinics = async (req, res) => {
    try {
        const response = await serviceClinic.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}