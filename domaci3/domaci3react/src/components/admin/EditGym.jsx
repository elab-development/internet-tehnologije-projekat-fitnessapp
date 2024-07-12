import React from 'react'
import  { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function EditGym() {
    const navigate = useNavigate();
    const {id}=   useParams();
    const[message, setMessage]= useState('');
    const [inputs, setInputs] = useState([]);
    
    const token = sessionStorage.getItem('authToken');
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const uploadGyms= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('name',inputs.name);
        formData.append('city',inputs.city);
        formData.append('streetNumber',inputs.streetNumber);
        formData.append('street',inputs.street);
       
        const response= await axios.post("api/gymsUpdate/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data",Authorization: `Bearer ${token}`},
        } );
        setMessage(response.data.message); 
        console.log(response)
        setTimeout(()=>{
            navigate('/adminGyms');
        }, 2000);
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await uploadGyms();
   
     }
      
     useEffect(() => {
        const token = sessionStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get('api/gym', config)
        .then((response) => {
          setInputs(response.data.data);
        
        })
        .catch((err) => {
          console.log("error");
        });
        }, []);
 
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8 mt-4">
        <h5 className="mb-4">Edit Gym </h5> 
        <p className="text-success"><b>{ message }</b></p>                              
         
            <form onSubmit={handleSubmit}>             
            <div className="mb-3 row">
            <label  className="col-sm-3">Name </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.name} className="form-control" name="name" onChange={ handleChange}/>
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">City </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.city} className="form-control" name="city" onChange={ handleChange} />
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Street number</label>
            <div className="col-sm-9">
                <input type="text" value={inputs.streetNumber} className="form-control" name="streetNumber" onChange={ handleChange} />
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Street</label>
            <div className="col-sm-9">
                <input type="text" value={inputs.street} className="form-control" name="street" onChange={ handleChange} />
            </div>
            </div>
            

            

            <div className="mb-3 row">
            <label className="col-sm-3"></label>
            <div className="col-sm-9">
            <button type="submit" className="btn btn-success">Submit</button>
            </div>
            </div>

            </form>

     </div>
    </div>
</div>
  )
}

export default EditGym