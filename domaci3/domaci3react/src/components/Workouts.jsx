import React from 'react';


import OneWorkout from './OneWorkout';
function Workouts({workouts}) {
  
return (
  <div className='allWorkouts'>
     <OneWorkout workouts={workouts[0]}/>
     <OneWorkout workouts={workouts[1]}/>
   </div>
  );
};

export default Workouts
   