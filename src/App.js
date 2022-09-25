/* import react router dom -> to replace <div> menjadi <BrowserRouter>*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClinic from "./components/clinics/AddClinic";
import ClinicList from "./components/clinics/ClinicList";
import EditClinic from "./components/clinics/EditClinic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClinicList />} />
        <Route path="/add" element={<AddClinic />} />
        <Route path="/edit/:id" element={<EditClinic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
