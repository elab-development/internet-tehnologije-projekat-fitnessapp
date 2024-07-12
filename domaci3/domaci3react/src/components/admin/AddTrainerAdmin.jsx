import React from 'react'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddTrainerAdmin({setToken}) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [licenceNumber,setLicenceNumber]=useState('');
    
    const [message,setMessage]=useState('');
    const navigate=useNavigate();
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    const uploadTrainer= async()=>{
        const formData= new FormData();
        formData.append('name', name);
        formData.append('email',email);
        formData.append('licenceNumber',licenceNumber);
       
        const responce= await axios.post("api/trainers", formData, {
            headers:{'Content-Type':"multipart/form-data",Authorization: `Bearer ${token}` },

        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); 
           
            setTimeout(()=>{
                navigate('/adminTrainers');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadTrainer();
 
   }
    
    
  return (
    <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-8 mt-4">
                <h5 className="mb-4">Add trainer</h5>
                <p className="text-warning">{message}</p>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3 row ">
                        <label className="col-sm-3">Name</label>
                        <div className="col-sm-5 txttitle">
                            <input type="text" className='form-control'  onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Email</label>
                        <div className="col-sm-5">
                            <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Licence number</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setLicenceNumber(e.target.value)}/>
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

export default AddTrainerAdmin
