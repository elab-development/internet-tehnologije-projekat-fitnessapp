import React from 'react'
import { TfiCheck } from "react-icons/tfi";
import { VscDiffRemoved } from "react-icons/vsc";


function OneWorkout({workouts,onAdd,onRemove,inMyWorkouts}) {
 
    
  return (
    <div className='oneWorkout'>
        <img src={workouts.img} alt="slika" className='imgcard' />
      
     <div className="cardbody">
    
       <h2 className='cardtitle'>{workouts.title}</h2>
       <h4 className='cardduration'>{workouts.duration}</h4>
       <h4 className='cardcalorie'>{workouts.calorie_burn}</h4>
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

  );
}

export default OneWorkout;