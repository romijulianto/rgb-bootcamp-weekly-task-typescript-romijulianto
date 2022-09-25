import express from "express";
import cors from "cors";
import ClinicRoute from "./routes/ClinicRoute.js";
import FacilityRoute from "./routes/FacilityRoute.js";
import ServiceRoute from "./routes/ServiceRoute.js";
import ServiceClinicRoute from "./routes/ServiceClinicRoute.js";
import FacilityClinicRoute from "./routes/FacilityClinicRoute.js";
import DetailTransactionRoute from "./routes/DetailTransactionRoute.js";

const app = express();

/* add middleware */
app.use(cors());
app.use(express.json());

/* add routing into crud */
app.use(ClinicRoute);
app.use(FacilityRoute);
app.use(ServiceRoute);
app.use(ServiceClinicRoute);
app.use(FacilityClinicRoute);
app.use(DetailTransactionRoute);


/* inisiasi server */
app.listen(4400, () => console.log('Server up and running...'));