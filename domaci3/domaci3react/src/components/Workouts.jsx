import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import OneWorkout from './OneWorkout';
function Workouts({workouts,setWorkouts,onAdd,onRemove}) {
  
  useEffect(()=>{
    if(workouts==null){
      axios.get("api/workout").then((res)=>{
        console.log(res.data);
        setWorkouts(res.data.workouts);
      });
    }
  },[workouts]);

 
  
    return (
     
  <div className="row gx-5">
     <div className="col">
       <div className="p-3 border bg-light">
        {workouts == null ? <></> :
       workouts.map((work)=>(
       <OneWorkout workouts={work} key={work.id} onAdd={onAdd} onRemove={onRemove} inMyWorkouts={1}/>
       ))
      }
       </div>
     </div>
    
   </div>
  );
};

export default Workouts
   