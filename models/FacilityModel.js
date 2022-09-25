import { Sequelize } from "sequelize";
import database from "../config/database.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table facility */
const Facility = database.define('facilities', {
    fasilities: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Facility;

/* create async function to load db */
(async () => {
    await database.sync();
})();