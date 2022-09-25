import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* useNavigate for redirect after edit clinic */
/* useParams for get params from BE */
import { useNavigate, useParams } from 'react-router-dom';

const EditClinic = () => {
    /* create new State for edit Clinic */
    const [name, setName] = useState(""); //initial value empity string
    const [address, setAddress] = useState(""); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();

    /* call params clinic_id */
    const { id } = useParams();


    /* call method getClinicById using useEffect */
    useEffect(() => {
        getClinicById();

    }, []);

    /* create function/method setClinic */
    const updateClinic = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.patch(`http://localhost:4400/clinics/${id}`, {
                name,
                address
            });
            navigate("/"); // navigate to home after EditClinic
        } catch (error) {
            console.log(error);
        }
    };

    /* method to get single data byID */
    const getClinicById = async () => {
        const response = await axios.get(`http://localhost:4400/clinics/${id}`);
        setName(response.data.name); // set response to setName
        setAddress(response.data.address); // set response to setName
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateClinic}>
                <div className="field">
                    <label  className="label">Nama Clinic</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'/>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Address</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Address'/>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditClinic;