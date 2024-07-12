import React from 'react'
import  { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function EditWorkout() {
    const navigate = useNavigate();
    const {id}=   useParams();
    const[message, setMessage]= useState('');
    const [inputs, setInputs] = useState([]);
    const [fileImage, setImage]= useState('');
    const token = sessionStorage.getItem('authToken');
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const uploadWorkouts= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('title',inputs.title);
        formData.append('duration',inputs.duration);
        formData.append('description',inputs.description);
       
        formData.append('price',inputs.price);
        formData.append('image', fileImage);
        const response= await axios.post("api/workoutsUpdate/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data",Authorization: `Bearer ${token}`},
        } );
        setMessage(response.data.message); 
        console.log(response)
        setTimeout(()=>{
            navigate('/adminWorkouts');
        }, 2000);
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await uploadWorkouts();
   
     }
      
     useEffect(() => {
        
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get('api/workouts'+id, config)
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
            <label  className="col-sm-3">Title </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.title} className="form-control" name="title" onChange={ handleChange}/>
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Duration </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.duration} className="form-control" name="duration" onChange={ handleChange} />
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Description </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.description} className="form-control" name="description" onChange={ handleChange} />
            </div>
            </div>
            <div className="mb-3 row">
            <label  className="col-sm-3">Price </label>
            <div className="col-sm-9">
                <input type="text" value={inputs.price} className="form-control" name="price" onChange={ handleChange} />
            </div>
            </div>

            <div className="mb-3 row">
            <label  className="col-sm-3">Product Image</label>
            <div className="col-sm-9">
                <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width={300} />
                <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])} />
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

export default EditWorkout