
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import MyWorkouts from './components/MyWorkouts';

import { useState } from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import axios from 'axios';
import Home from './components/Home';
import WorkoutsCRUD from './components/admin/WorkoutsCRUD';
import AddWorkoutAdmin from './components/admin/AddWorkoutAdmin';
import AddTrainerAdmin from './components/admin/AddTrainerAdmin';
import EditWorkout from './components/admin/EditWorkout';
import EditTrainer from './components/admin/EditTrainer';
import TrainersCRUD from './components/admin/TrainerCRUD';
function App() {
  const [workouts,setWorkouts]=useState();
  const [token,setToken]=useState(null);
  
 
 
 
 

  
  return (
    <BrowserRouter className="App">
      
       
      <Navbar   token={token} setToken={setToken}></Navbar>    
      <Routes>
         <Route path='/login' element={<LoginPage setToken={setToken} />} />
         <Route path='/register' element={<RegisterPage/>}/>
         <Route path='/' element={<Home/>}/>
          <Route path='/workouts' element={<Workouts workouts={workouts}  />}/>
          <Route path='/myWorkouts' element={<MyWorkouts workouts={workouts}/>}/>
         <Route path='/adminWorkouts'element={<WorkoutsCRUD/>}/>
         <Route path='/addWorkouts'element={<AddWorkoutAdmin/>}/>
         <Route path="editworkout/:id/edit" element={<EditWorkout />} />
         <Route path='/adminTrainers'element={<TrainersCRUD/>}/>
         <Route path='/addTrainers' element={<AddTrainerAdmin/>}/>
         <Route path="edittrainer/:id/edit" element={<EditTrainer />} />
         
       
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
