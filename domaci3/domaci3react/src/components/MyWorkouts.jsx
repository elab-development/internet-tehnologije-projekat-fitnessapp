import React, { useState,useEffect,useParams} from 'react'
import { useNavigate } from 'react-router-dom';
import OneWorkout from './OneWorkout'
import axios from 'axios';
import OneMyWorkout from './OneMyWorkout';
import useWorkouts from './useWorkouts';
import InputField from './InputField';
import useGyms from './useGyms';
import useTrainers from './useTrainers';
function MyWorkouts({token}) {
  const navigate=useNavigate();
  const [message,setMessage]=useState('');
  
  const [workouts]=useWorkouts();
  const [gyms]=useGyms();
  const [trainers]=useTrainers();
  
  const [formData, setFormData] = useState({
    workout_id: '',
    trainer_id:'',
    gym_id:'',
    date:'',
    time:'',
   
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem('authToken');

    // Kreiranje Axios POST zahtjeva sa tokenom u zaglavlju
    axios.post('api/myWorkouts', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data.message);
        
          
          navigate('/');
          

      })
      .catch(error => {
        console.error(error.response.data);
        alert("Error");
        // Ovdje možete dodati logiku za obradu greške
      });
  };
   
    
    
  

  
   
  
    return (
      
      <form onSubmit={handleSubmit} className="modal-form">
        <h2>Create Plan</h2>
        
        <div className="input-group">
            <select
                name="workout_id"
                value={formData.workout_id}
                onChange={handleChange}
            >
                <option value="" disabled>
                Select workout
                </option>
                {workouts.map((workout) => (
                <option key={workout.id} value={workout.id}>
                    {workout.title}
                    </option>
                ))}
            </select>
            </div>
            
        <InputField
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date"
          type="date"
        />
        <InputField
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time"
          type="time"
          />
          <div className="input-group">
           <select
               name="gym_id"
               value={formData.gym_id}
               onChange={handleChange}
           >
               <option value="" disabled>
               Select gym
               </option>
               {gyms.map((g) => (
               <option key={g.id} value={g.id}>
                   {g.name}
               </option>
               ))}
           </select>
           <select
               name="trainer_id"
               value={formData.gym_id}
               onChange={handleChange}
           >
               <option value="" disabled>
               Select trainer
               </option>
               {trainers.map((t) => (
               <option key={t.id} value={t.id}>
                   {t.name}
               </option>
               ))}
           </select>
           </div>
           <div className="options">
             <button type="submit" className="login-button">
               Create Reservation
             </button>
           </div>
         </form>
      
     
  );
};




export default MyWorkouts