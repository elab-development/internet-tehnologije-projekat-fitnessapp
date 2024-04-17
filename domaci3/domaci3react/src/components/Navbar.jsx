import React from 'react'



function Navbar({calorieCounter}) {
  
    
  return (
    <div className='navbar'>
      <a href="/">My workouts</a>
      <p className='counter'>Calorie counter: {calorieCounter}</p>

    
      
      
    </div>
  )
}

export default Navbar