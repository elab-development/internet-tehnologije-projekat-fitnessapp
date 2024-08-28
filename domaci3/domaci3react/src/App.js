
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import MyWorkouts from './components/MyWorkouts';
import Trainers from './components/Trainers';
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
import AddGymsAdmin from './components/admin/AddGymAdmin';
import EditGym from './components/admin/EditGym';
import GymsCRUD from './components/admin/GymCRUD';
import Gym from './components/Gym';
import MyWorkoutPlans from './components/MyWorkoutPlans';
import BmiPage from './BmiPage';
import Stats from './components/admin/Stats';
import ResetPass from './components/ResetPass';

function App() {
  
  const [token,setToken]=useState(null);
  
  
  
 
 
 
 

  
  return (
    
    
    <BrowserRouter className="App">
      
       
      <Navbar   token={token} setToken={setToken}></Navbar>    
      <Routes>
         <Route path='/login' element={<LoginPage setToken={setToken} />} />
         <Route path='/register' element={<RegisterPage/>}/>
         <Route path='/' element={<Home/>}/>
          <Route path='/workouts' element={<Workouts  />}/>
          <Route path='/trainers' element={<Trainers   />}/>
          <Route path='/gyms' element={<Gym  />}/>
          <Route path='/createPlan' element={<MyWorkouts />}/>
          <Route path='myPlans' element={<MyWorkoutPlans/>}/>
          <Route path='/api/bmi' element={<BmiPage/>}/>
         <Route path='/adminWorkouts'element={<WorkoutsCRUD/>}/>
         <Route path='/addWorkouts'element={<AddWorkoutAdmin/>}/>
         <Route path="editworkout/:id/edit" element={<EditWorkout />} />
         <Route path='/adminTrainers'element={<TrainersCRUD/>}/>
         <Route path='/addTrainers' element={<AddTrainerAdmin/>}/>
         <Route path="edittrainer/:id/edit" element={<EditTrainer />} />
         <Route path='/adminGyms'element={<GymsCRUD/>}/>
         <Route path='/addGyms' element={<AddGymsAdmin/>}/>
         <Route path="editgym/:id/edit" element={<EditGym />} />
         <Route path="adminStats" element={<Stats />} />
         <Route path="reset" element={<ResetPass />} />
       
        
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;
