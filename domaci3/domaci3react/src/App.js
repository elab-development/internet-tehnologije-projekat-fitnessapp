
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import MyWorkouts from './components/MyWorkouts';
import Pagination from './components/Pagination';
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
  const[currentPage,setCurrentPage]=useState(1);
  const[workoutsPerPage,setWorkoutsPerPage]=useState(1);
 
  function refreshMyWorkouts(){
    let show = workouts.filter((oneWorkout) => oneWorkout.count > 0);
    setChosenWorkouts (show);
  }
  function addWorkout(calorie_burn,id){
    
    setCalorieCounter(calorieCounter+calorie_burn);
    workouts.forEach((work)=>{
      if(work.id===id){
        work.count++;
      }I
    });
    refreshMyWorkouts();

  }
  function removeWorkout(calorie_burn){
    setCalorieCounter(calorieCounter-calorie_burn);
  }
  function addToken(auth_token){
    setToken(auth_token);
  }
 
   const lastPointIndex=currentPage*workoutsPerPage;
   const firstPointIndex=lastPointIndex-workoutsPerPage;
   const currentWorkout=workouts.slice(firstPointIndex,lastPointIndex);
  
  return (
    <BrowserRouter className="App">
      
       
                    
      <Routes>
         <Route path='/login' element={<LoginPage addToken={addToken}/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/' element={<Navbar  calorieCounter={calorieCounter} token={token}/>}>
          <Route path='/workouts' element={<Workouts workouts={currentWorkout} onAdd={addWorkout} onRemove={removeWorkout} />}/>
          <Route path='/myWorkouts' element={<MyWorkouts workouts={chosenWorkouts}/>}/>
          <Route path="/" element={<Pagination totalWorkouts={workouts.length} 
                    workoutsPerPage={workoutsPerPage}
                    setCurrentPage={setCurrentPage}/>}/>
        </Route>
       
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
