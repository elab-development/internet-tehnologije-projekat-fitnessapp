
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import MyWorkouts from './components/MyWorkouts';

import { useState } from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import axios from 'axios';
function App() {
  const [workouts,setWorkouts]=useState();
  const [token,setToken]=useState();
  const[calorieCounter,setCalorieCounter]=useState(0);
  const[chosenWorkouts,setChosenWorkouts]=useState([]);
 
 
  function refreshMyWorkouts(){
    let show = workouts.filter((oneWorkout) => oneWorkout.count > 0);
    setChosenWorkouts (show);
  }
  function addWorkout(calorie_burn,id){
    
    setCalorieCounter(calorieCounter+calorie_burn);
    workouts.forEach((work)=>{
      if(work.id===id){
        work.count++;
      }
    });
    refreshMyWorkouts();

  }
  function removeWorkout(calorie_burn){
    setCalorieCounter(calorieCounter-calorie_burn);
  }
 
 

  
  return (
    <BrowserRouter className="App">
      
       
                    
      <Routes>
         <Route path='/login' element={<LoginPage setToken={setToken} />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/' element={<Navbar  token={token} setToken={setToken}/>}>
          <Route path='/workouts' element={<Workouts workouts={workouts} onAdd={addWorkout} onRemove={removeWorkout} />}/>
          <Route path='/myWorkouts' element={<MyWorkouts workouts={chosenWorkouts}/>}/>
         
        </Route>
       
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
