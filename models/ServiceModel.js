import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Facility from "./FacilityModel.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table services */
const Service = database.define('services', {
    service: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Service;

/* create async function to load db */
(async () => {
    /* create association */
    await Facility.hasMany(Service);
    await Service.belongsTo(Facility);
    
    /* create async function to load table */
    await Facility.sync();
    await Service.sync();

    /* create async function to load db */
    await database.sync();
})();