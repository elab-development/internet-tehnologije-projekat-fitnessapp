import React from 'react'
import  { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function EditTrainer() {
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
    const uploadTrainers= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('name',inputs.name);
        formData.append('email',inputs.email);
        formData.append('licenceNumber',inputs.licenceNumber);
       
       
        const response= await axios.post("api/trainers/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data",Authorization: `Bearer ${token}`},
        } );
        setMessage(response.data.message); 
        console.log(response)
        setTimeout(()=>{
            navigate('/adminTrainers');
        }, 2000);
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await uploadTrainers();
   
     }
      
     useEffect(() => {
        const token = sessionStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get('api/trainer', config)
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
        <h5 className="mb-4">Edit Product </h5> 
        <p className="text-success"><b>{ message }</b></p>                              
         
            <form onSubmit={handleSubmit}>             
            <div className="mb-3 row">
            <label  className="col-sm-3">Name </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.name} className="form-control" name="name" onChange={ handleChange}/>
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Email </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.email} className="form-control" name="email" onChange={ handleChange} />
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Licence number</label>
            <div className="col-sm-9">
                <input type="text" value={inputs.licenceNumber} className="form-control" name="licenceNumber" onChange={ handleChange} />
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

export default EditTrainer