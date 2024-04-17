import React from "react"
import { useState } from "react"
import axios from 'axios';


export const Blood = () =>{

const [query, setQuery] = useState(
    {
    bloodType:'',
    address : ''
    }
);
 const [searchResults, setSearchResults] = useState([]);
const handleChange = async (e) =>{
    // let name = e.target.name;
    // let value = e.target.value;

    // setformdata({
    //   ...formdata
    //   [name] =  value
    // });

    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/api/register/search', query);
      console.log(response.data)    
       setSearchResults(response.data);
       alert("Donar Found")
      console.log('Data sent to backend:', response.data);
      // Reset form data after successful submission
      setQuery({
       
        bloodType: '',
        address: ''
    });
  
    } catch (error) {
      console.error('Error sending data to backend:', error);
    
    }
   

};


    return(
        <>
        <div className="main">


        <h1 className="text-center">Search For Blood</h1>
        <div className="container">
            
            <div className="form">

            <form onSubmit={handleSubmit}>


                <div className="form-group">

                        <label className="label">Blood Type :

                        <input type="text" id="bloodType" name="bloodType" placeholder="Enter your location" className="input-field"
                             
                             value={query.bloodType}
                             onChange={handleChange}
                             required
                             /></label>

                
                
                        <label className="label"> Location: 
                             <input type="text" id="location" name="address" placeholder="Enter your location" className="input-field"
                             
                             value={query.address}
                             onChange={handleChange}
                             required
                             />
                             </label>

                </div>
                <div className="submit">
                <button type="submit" className="submit-btn">Search</button>
                </div>



            </form>
            </div>
            </div>
          
            <div id= "results">

                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>Mobile No</th>
                    <th>Location</th>
                    </tr>
                    </thead>
                    <tbody >

                    {searchResults.map((user, index) => (
                  
                    <tr key={index}>
                        <td>
                        {user.fullName}
                        </td>
                        <td>
                        {user.bloodType}
                        </td>
                        <td>
                        {user.phoneNumber}
                        </td>
                        <td>
                        {user.address}
                        </td>
                    </tr>
                    ))}
                    </tbody>

                  

    </table>

            </div>

  
        
        </div>
        
        </>
    )

}