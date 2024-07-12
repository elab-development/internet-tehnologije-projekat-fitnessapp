import React from 'react'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddGymAdmin({setToken}) {
    const [name,setName]=useState('');
    const [city,setCity]=useState('');
    const [streetNumber,setStreetNumber]=useState('');
    const [street,setStreet]=useState('');
    const [message,setMessage]=useState('');
    const navigate=useNavigate();
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    const uploadGym= async()=>{
        const formData= new FormData();
        formData.append('name', name);
        formData.append('city',city);
        formData.append('streetNumber',streetNumber);
        formData.append('street',street);
        const responce= await axios.post("api/gyms", formData, {
            headers:{'Content-Type':"multipart/form-data",Authorization: `Bearer ${token}` },

        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); 
           
            setTimeout(()=>{
                navigate('/adminGyms');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadGym();
 
   }
    
    
  return (
    <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-8 mt-4">
                <h5 className="mb-4">Add gym</h5>
                <p className="text-warning">{message}</p>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3 row ">
                        <label className="col-sm-3">Name</label>
                        <div className="col-sm-5 txttitle">
                            <input type="text" className='form-control'  onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">City</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Street number</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setStreetNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Street</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setStreet(e.target.value)}/>
                        </div>
                    </div>
                    
                    
                   
                    <div className="mb-3 row">
                        <label className="col-sm-3"></label>
                        <div className="col-sm-5">
                            <button type="submit" className='btn btn-success' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default AddGymAdmin
