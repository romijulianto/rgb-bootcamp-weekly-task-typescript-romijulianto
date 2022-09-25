import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Service from "./ServiceModel.js";
import Clinic from "./ClinicModel.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table service_clinic */
const serviceClinic = database.define('service_clinics', {
    service_clinic_name: DataTypes.STRING
}, {
    freezeTableName: true
});

export default serviceClinic;

/* create async function to load db */
(async () => {
    /* create association with table service and clinic */
    /* association with service */
    await Service.hasMany(serviceClinic);
    await serviceClinic.belongsTo(Service);

    /* create async function with table clinic */
    await Clinic.hasMany(serviceClinic);
    await serviceClinic.belongsTo(Clinic);
    
    /* create async function to load table */
    await Clinic.sync();
    await Service.sync();
    await serviceClinic.sync();
    await database.sync();
})();