import React from 'react'
import OneWorkout from './OneWorkout'
function MyWorkouts({workouts}) {
  return (
    <div className='allWorkouts'>
        <h3>List of your workouts!</h3>
        {workouts.map((work)=>(
        <OneWorkout workouts={work} key={work.id} />
     ))}
    </div>
  )
}

export default MyWorkouts