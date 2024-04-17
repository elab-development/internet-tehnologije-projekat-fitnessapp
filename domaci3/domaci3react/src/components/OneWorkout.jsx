import React from 'react'
import { TfiCheck } from "react-icons/tfi";
import { VscDiffRemoved } from "react-icons/vsc";


function OneWorkout({workouts,onAdd,onRemove}) {
 
    
  return (
    <div className='oneWorkout'>
        <img src={workouts.img} alt="slika" className='imgcard' />
      
     <div className="cardbody">
    
       <h2 className='cardtitle'>{workouts.title}</h2>
       <h4 className='cardduration'>{workouts.duration}</h4>
       <h4 className='cardcalorie'>{workouts.calorie_burn}</h4>
       <button className='btn' onClick={()=>onAdd(workouts.calorie_burn)}><TfiCheck/></button>
       <button className='btn' onClick={()=>onRemove(workouts.calorie_burn)}><VscDiffRemoved/></button>
    
       </div>
      
      
    
    </div>

  );
}

export default OneWorkout;