import React from 'react'


function OneWorkout({workouts}) {
  
    
  return (
    <div className="card">
  <div className="row g-0">
    <div className="col-5 col-sm-4">
    <img src={`http://127.0.0.1:8000/storage/${workouts.image}`} className="img-thumbnail"  alt="" />
    </div>
    <div className="col-7 col-sm-8">
      <div className="card-body">
        <h5 className="card-title">Title: {workouts.title}</h5>
        <p className="card-text">Duration: {workouts.duration} minutes</p>
        <p className="card-text">About workout: {workouts.description}</p>
        <p className="card-text">Price: {workouts.price}</p>
        
        
        
      </div>
    </div>
  </div>
</div>
   
    
    

  );
}

export default OneWorkout;