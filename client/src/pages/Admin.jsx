import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios';


export const Admin = () => {


    const [donors, setDonors] = useState([]);

    useEffect(() => {
      fetchDonors();
    }, []);
  
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/register/donors');
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/api/register/donors/${id}`);
        // Remove the deleted donor from the donors list
        setDonors(donors.filter(donor => donor._id !== id));
      } catch (error) {
        console.error('Error deleting donor:', error);
      }
    };
  

    
    const handleApprove = async (id) => {
      try {
        // Make an API request to approve the donor with the specified ID
        await axios.put(`http://localhost:3000/api/register/donors/${id}/approve`);
        // Update the approval status in state
        setDonors(donors.map(donor => {
            if (donor._id === id) {
              return { ...donor, isApproved: true };
            }
            return donor;
          }));
       
      } catch (error) {
        console.error('Error approving donor:', error);
      }
    };
      
  


return(
    <>
    <div>
  <h1 className="text-center"> Admin Page </h1>   
    <br />
    <br />
      <h2 className="text-center">List of Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Blood Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         { donors.map((donor) => (
            <tr key={donor._id}>
              <td>{donor.fullName}</td>
              <td>{donor.dateOfBirth}</td>
              <td>{donor.gender}</td>
              <td>{donor.bloodType}</td>
              <td>
                            { donor.isApproved ? (
                <p>Donor Approved</p>
                ) : (
                <>
                    <button className="btn btn1" onClick={() => handleDelete(donor._id)}>Delete</button>
                    <button className="btn btn1" onClick={() => handleApprove(donor._id)}>Approve</button>
                </>
                )}
                
                
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
     </>
  );
}
   
 

