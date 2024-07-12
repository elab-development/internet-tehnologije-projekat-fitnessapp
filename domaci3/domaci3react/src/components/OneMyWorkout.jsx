import React from 'react'

function OneMyWorkout({reservation}) {
  return (
    <tr>
      <td>{reservation.id}</td>
      <td>{reservation.gym.name}</td>
      <td>{reservation.date}</td>
      <td>{reservation.time}</td>
      <td>{reservation.user.name}</td>
      <td>{reservation.trainer.name}</td>
      <td>{reservation.workout.title}</td>
    </tr>
  )
}

export default OneMyWorkout