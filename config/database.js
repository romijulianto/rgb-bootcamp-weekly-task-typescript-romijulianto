import { Sequelize } from "sequelize";

const database = new Sequelize('clinic_management', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default database;
