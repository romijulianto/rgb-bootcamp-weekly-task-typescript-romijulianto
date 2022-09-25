/* for fetch data from backend need useState, useEffect */
import React, { useState, useEffect } from 'react'
/* import axios for api interaction */
import axios from "axios";

/* use link to navigate button into specific url */
import { Link } from 'react-router-dom';

const ClinicList = () => {
    /* create new state for update useState */
    const [clinics, setClinic] = useState([]); // initial value empity array: []

    /* to run method, add useEffect */
    useEffect(() => {
        getClinics();
    }, []); // [] useEffect running on mounted to DOM

    /* method to fecth data from be */
    const getClinics = async () => {
        const response = await axios.get('http://localhost:4400/clinics');
        
        /* array from be set to State = setClinic */
        setClinic(response.data);

        /* ouput array be to console */
        console.log(response.data);
    };

    /* method to delete Clinic */
    const deleteClinic = async (id) => {
        try {
            await axios.delete(`http://localhost:4400/clinics/${id}`);
            /* if delete success callback method getClinic */
            getClinics();
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column">
            <Link to={`/add`} className="button is-success">Add New Clinic</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Id Clinic</th>
                        <th>Nama Clinic</th>
                        <th>Alamat</th>
                        <th>UpdateAt</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clinics.map((clinic, index) => (
                    <tr key={clinic.id}>
                        <td>{ clinic.id }</td>
                        <td>{ clinic.name }</td>
                        <td>{ clinic.address }</td>
                        <td>{ clinic.updatedAt }</td>
                        <td>
                            <Link to={`/edit/${clinic.id}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={() => deleteClinic(clinic.id)} className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ClinicList