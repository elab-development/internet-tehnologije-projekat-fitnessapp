import React from 'react';


import OneWorkout from './OneWorkout';
function Workouts({workouts,onAdd,onRemove}) {
  
return (
  <div className='allWorkouts'>
     {workouts.map((work)=>(
        <OneWorkout workouts={work} key={work.id} onAdd={onAdd} onRemove={onRemove} inMyWorkouts={1}/>
     ))}
   </div>
  );
};

export default Workouts
   