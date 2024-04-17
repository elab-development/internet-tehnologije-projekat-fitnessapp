import React from 'react'
import { TfiCheck } from "react-icons/tfi";

function OneWorkout({workouts,onAdd}) {
  function onAdd(title){
    console.log("dodat"+title);
  };
    
  return (
    <div className='oneWorkout'>
        <img src={workouts.img} alt="slika" className='imgcard' />
      
     <div className="cardbody">
    
       <h2 className='cardtitle'>{workouts.title}</h2>
       <h4 className='cardduration'>{workouts.duration}</h4>
       <h4 className='cardcalorie'>{workouts.calorie_burn}</h4>
       <button className='btn' onClick={()=>onAdd(workouts.title)}><TfiCheck/></button>
    
       </div>
      
      
    
    </div>

  );
}

export default OneWorkout;