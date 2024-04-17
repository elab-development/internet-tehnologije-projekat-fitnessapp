import React from 'react';


import OneWorkout from './OneWorkout';
function Workouts({workouts,onAdd}) {
  
return (
  <div className='allWorkouts'>
     {workouts.map((work)=>(
        <OneWorkout workouts={work} key={work.id} onAdd={onAdd}/>
     ))}
   </div>
  );
};

export default Workouts
   