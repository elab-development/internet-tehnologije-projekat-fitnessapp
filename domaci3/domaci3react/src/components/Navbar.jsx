import React from 'react'
import { IoGitNetworkOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';


function Navbar({calorieCounter}) {
  
    
  return (
    <div className='navbar'>
      <Link to="/">My workouts</Link>
      <Link to="/myWorkouts" className='workout-items'><IoGitNetworkOutline/></Link>
      <p className='counter'>Calorie counter: {calorieCounter}</p>

    
      
      
    </div>
  )
}

export default Navbar