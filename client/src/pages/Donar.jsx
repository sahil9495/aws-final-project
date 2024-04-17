import React from "react"
import { useState } from "react"
import axios from 'axios';
export const Donar=()=>{

    const [formdata , setformdata]=useState(
      {
        fullName : '',
        dateOfBirth : '',
        gender: '',
        bloodType: '',
        address: '',
        phoneNumber: '',
        emailAddress: '',
        aadharnum: ''

      }
    );
    
    const handleChange = async (e) =>{
      // let name = e.target.name;
      // let value = e.target.value;

      // setformdata({
      //   ...formdata
      //   [name] =  value
      // });

      setformdata({
        ...formdata,
        [e.target.name]: e.target.value
      });
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
     
      try {
        const response = await axios.post('http://localhost:3000/api/register', formdata);
        alert("Data Submited Susceeasfully")
        console.log('Data sent to backend:', response.data);
        // Reset form data after successful submission
        setformdata({
          fullName: '',
          dateOfBirth: '',
          gender: '',
          bloodType: '',
          address: '',
          phoneNumber: '',
          emailAddress: '',
          aadharnum: ''
      });
    
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
     

  };
  


    return(
        <>
         <h1 className="text-center">Thanks For Saving Life</h1>
    <div className="container-s">
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formdata.fullName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formdata.dateOfBirth}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Gender:</label>
          <select
            name="gender"
            value={formdata.gender}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Blood Type: </label>
          <input
            type="text"
            name="bloodType"
            value={formdata.bloodType}
            onChange={handleChange}
            className="input-field"
            required
          />
         
        </div>

        <div className="form-group">
          <label className="label">Address:</label>
          <input
            type="text"
            name="address"
            value={formdata.address}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="label">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formdata.phoneNumber}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Email Address:</label>
          <input
            type="email"
            name="emailAddress"
            value={formdata.emailAddress}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Aadhar Number:</label>
          <input
            type="text"
            name="aadharnum"
            value={formdata.aadharnum}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>

        </>
    )

}