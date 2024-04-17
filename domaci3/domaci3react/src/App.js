
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import MyWorkouts from './components/MyWorkouts';
import { useState } from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
function App() {
  
  const[calorieCounter,setCalorieCounter]=useState(0);
  const workouts=[
    {
        id:1,
        img:"https://clipart-library.com/img/1985093.jpg",
        title:'Strength',
        duration:"60 minutes",
        calorie_burn:600
    },
    {
        id:2,
        img:"https://clipart-library.com/new_gallery/83-831945_instructions-to-get-six-pack-abs-easily-cardio.png",
        title:'Cardio',
        duration:"30 minutes",
        calorie_burn:350
    },
    {
        id:3,
        img:"https://clipart-library.com/new_gallery/swimmer-clipart-56.jpg",
        title:'Swimming',
        duration:"45 minutes",
        calorie_burn:250
    },
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_MEoub8Wc7lAAHiI3fgB9lsl4K6hHGDuEw&s",
        title:"Yoga",
        duration:"60 minutes",
        calorie_burn:100
    }
  ];
  function addWorkout(calorie_burn){
    
    setCalorieCounter(calorieCounter+calorie_burn);
  };
  function removeWorkout(calorie_burn){
    setCalorieCounter(calorieCounter-calorie_burn);
  }
  return (
    <BrowserRouter className="App">
       <Navbar calorieCounter={calorieCounter}/>
      <Routes>
        <Route path='/' element={<Workouts workouts={workouts} onAdd={addWorkout} onRemove={removeWorkout} />}/>
        <Route path='/myWorkouts' element={<MyWorkouts/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
