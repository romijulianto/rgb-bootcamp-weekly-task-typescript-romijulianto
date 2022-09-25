import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Facility from "./FacilityModel.js";
import Service from "./ServiceModel.js"
import Clinic from "./ClinicModel.js";
import serviceClinic from "./ServiceClinicModel.js";
import facilityClinic from "./FacilityClinicModel.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table detail_transaction */
const detailTransaction = database.define('detail_transaction', {
    patient_name: DataTypes.STRING,
    transac_date: DataTypes.DATE
}, {
    freezeTableName: true
});

export default detailTransaction;

/* create async function to load db */
(async () => {
    /* create association with table service_clinic and facility_clinic */
    /* association with facility_clinic */
    await facilityClinic.hasMany(detailTransaction);
    await detailTransaction.belongsTo(facilityClinic);

    /* create async function with table service_clinic */
    await serviceClinic.hasMany(detailTransaction);
    await detailTransaction.belongsTo(serviceClinic);
    
    /* create async function to load table */
    await Clinic.sync();
    await Facility.sync();
    await Service.sync();
    await serviceClinic.sync();
    await facilityClinic.sync();
    await detailTransaction.sync();
    await database.sync();
})();