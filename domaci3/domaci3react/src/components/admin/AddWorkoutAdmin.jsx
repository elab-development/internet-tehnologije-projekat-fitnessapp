import React from 'react'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
function AddWorkoutAdmin({setToken}) {
    const [title,setTitle]=useState('');
    const [duration,setDuration]=useState('');
    const [description,setDescription]=useState('');
    
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const [message,setMessage]=useState('');
    const navigate=useNavigate();
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    const uploadWorkout= async()=>{
        console.log(image)
        const formData= new FormData();
        formData.append('title', title);
        formData.append('duration',duration);
        formData.append('description',description);
       
        formData.append('price',price);
        formData.append('image', image);
        const response= await axios.post("api/workouts", formData, {
            headers:{'Content-Type':"multipart/form-data",Authorization: `Bearer ${token}` },

        } );
 
        if(response)
        {
            console.log(response)
            setMessage(response.message); 
           
            setTimeout(()=>{
                navigate('/adminWorkouts');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadWorkout();
 
   }
    
    
  return (
    <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-8 mt-4">
                <h5 className="mb-4">Add workout</h5>
                <p className="text-warning">{message}</p>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3 row ">
                        <label className="col-sm-3">Title</label>
                        <div className="col-sm-5 txttitle">
                            <input type="text" className='form-control'  onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Duration</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setDuration(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Description</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="mb-3 row">
                        <label className="col-sm-3">Price</label>
                        <div className="col-sm-5">
                            <input type="text" className='form-control' onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3">Image</label>
                        <div className="col-sm-5 " >
                            <input type="file" className='form-control img-thumbnail ' onChange={(e)=>setImage(e.target.files[0])}  />
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

export default AddWorkoutAdmin
