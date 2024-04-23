import React from 'react'
import { TfiCheck } from "react-icons/tfi";
import {VscDiffRemoved} from "react-icons/vsc"


function OneWorkout({workouts,onAdd,onRemove,inMyWorkouts}) {
 
    
  return (
    <div className="card">
  <div className="row g-0">
    <div className="col-5 col-sm-4">
      <img src={workouts.img}  className="img-fluid w-100" alt="card-horizontal-image"/>
    </div>
    <div className="col-7 col-sm-8">
      <div className="card-body">
        <h5 className="card-title">{workouts.title}</h5>
        <p className="card-text">Duration: {workouts.duration} minutes</p>
        <p className="card-text">About workout: {workouts.description}</p>
        <p className="card-text">Trainer: {workouts.trainer.name}</p>
        <p className="card-text"><small className="text-muted">{workouts.calorie_burn}</small></p>
        {inMyWorkouts=== 1 ? (
        <>
       <button className='btn' onClick={()=>onAdd(workouts.calorie_burn,workouts.id)}><TfiCheck/></button>
       <button className='btn' onClick={()=>onRemove(workouts.calorie_burn)}><VscDiffRemoved/></button>
       </>
      ):(
        <h4>Number of selections: {workouts.count}</h4>
      )}
      </div>
    </div>
  </div>
</div>
   
    
    

  );
}

export default OneWorkout;