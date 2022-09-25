import detailTransaction from "../models/DetailTransactionModel.js";

export const getDetailTransaction = async (req, res) => {
    try {
        const response = await detailTransaction.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method getDetailTransaction By Id */
export const getDetailTransactionById = async (req, res) => {
    try {
        const response = await detailTransaction.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

/* method create Detail Transaction */
export const createDetailTransaction = async (req, res) => {
    try {
        await detailTransaction.create(req.body);
        res.status(201).json({ message: "Detail Transaction Created" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method update Detail Transaction */
export const updateDetailTransaction = async (req, res) => {
    try {
        await detailTransaction.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Detail Transaction Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

/* method delete Detail Transaction */
export const deleteDetailTransaction = async (req, res) => {
    try {
        await detailTransaction.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Detail Transaction Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}