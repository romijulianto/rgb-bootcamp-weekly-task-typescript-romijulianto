import { Sequelize } from "sequelize";
import database from "../config/database.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table clinic */
const Clinic = database.define('clinics', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Clinic;

/* create async function to load db */
(async () => {
    await database.sync();
})();