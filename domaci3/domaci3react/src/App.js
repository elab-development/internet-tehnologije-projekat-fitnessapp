
import './App.css';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import MyWorkouts from './components/MyWorkouts';
import Pagination from './components/Pagination';
import { useState } from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
function App() {
  
  const[calorieCounter,setCalorieCounter]=useState(0);
  const[chosenWorkouts,setChosenWorkouts]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[workoutsPerPage,setWorkoutsPerPage]=useState(1);
  const [workouts,setWorkouts]=useState([
    {
        id:1,
        img:"https://clipart-library.com/img/1985093.jpg",
        title:'Strength',
        duration:"60 minutes",
        calorie_burn:600,
        count:0
    },
    {
        id:2,
        img:"https://clipart-library.com/new_gallery/83-831945_instructions-to-get-six-pack-abs-easily-cardio.png",
        title:'Cardio',
        duration:"30 minutes",
        calorie_burn:350,
        count:0
    },
    {
        id:3,
        img:"https://clipart-library.com/new_gallery/swimmer-clipart-56.jpg",
        title:'Swimming',
        duration:"45 minutes",
        calorie_burn:250,
        count:0
    },
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_MEoub8Wc7lAAHiI3fgB9lsl4K6hHGDuEw&s",
        title:"Yoga",
        duration:"60 minutes",
        calorie_burn:100,
        count:0
    }
  ]);
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
 
   const lastPointIndex=currentPage*workoutsPerPage;
   const firstPointIndex=lastPointIndex-workoutsPerPage;
   const currentWorkout=workouts.slice(firstPointIndex,lastPointIndex);
  
  return (
    <BrowserRouter className="App">
      
       <Pagination totalWorkouts={workouts.length} 
                    workoutsPerPage={workoutsPerPage}
                    setCurrentPage={setCurrentPage}/>
                    
      <Routes>
      <Route path='/' element={<Navbar  calorieCounter={calorieCounter}/>}/>
        <Route path='/' element={<Workouts workouts={currentWorkout} onAdd={addWorkout} onRemove={removeWorkout} />}/>
        <Route path='/myWorkouts' element={<MyWorkouts workouts={chosenWorkouts}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
       
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
