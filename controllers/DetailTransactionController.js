import detailTransaction from "../models/DetailTransactionModel.js";

export const getDetailTransaction = async (req, res) => {
    try {
        const response = await detailTransaction.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}