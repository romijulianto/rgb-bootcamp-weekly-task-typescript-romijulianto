import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Facility from "./FacilityModel.js";
import Service from "./ServiceModel.js"
import Clinic from "./ClinicModel.js";

/* call DataType function from sequelize */
const { DataTypes } = Sequelize;

/* initiate table facility_clinic */
const facilityClinic = database.define('facility_clinics', {
    facility_clinic_name: DataTypes.STRING
}, {
    freezeTableName: true
});

export default facilityClinic;

/* create async function to load db */
(async () => {
    /* create association with table clinic and facility */
    /* association with facility */
    await Facility.hasMany(facilityClinic);
    await facilityClinic.belongsTo(Facility);

    /* create async function with table clinic */
    await Clinic.hasMany(facilityClinic);
    await facilityClinic.belongsTo(Clinic);
    
    /* create async function to load table */
    await Clinic.sync();
    await Facility.sync();
    await Service.sync();
    await facilityClinic.sync();
    await database.sync();
})();