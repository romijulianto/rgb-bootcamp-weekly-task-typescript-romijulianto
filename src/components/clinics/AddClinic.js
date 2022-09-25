import React, { useState } from 'react';
import axios from 'axios';
/* useNavigate for redirect after post clinic */
import { useNavigate } from 'react-router-dom';

const AddClinic = () => {
    /* create new State for add Clinic */
    const [name, setName] = useState(""); //initial value empity string
    const [address, setAddress] = useState(""); //initial value empity string

    /* initiate variable to navigate home */
    const navigate = useNavigate();


    /* create function/method setClinic */
    const saveClinic = async (e) => {
        e.preventDefault(); // use this when submit page not reload
        try {
            await axios.post('http://localhost:4400/clinics', {
                name,
                address
            });
            navigate("/"); // navigate to home after saveClinic
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveClinic}>
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
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddClinic