import React from "react";
import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { debounce } from 'lodash';
import useWorkouts from "./useWorkouts";
function MyWorkoutPlans() {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get('api/myWorkouts', config)
      .then((response) => {
        setReservations(response.data.data);
        
        
      })
      .catch((err) => {
        console.log("Error");
        
      });
  }, []);

  
  

  

  return (
    
      <table class="table">
       
        <thead>
          <tr>
            <th scope="col">Workout type</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Trainer</th>
            <th scope="col">Gym</th>
          </tr>
        </thead>
        <tbody>
        {reservations.map((reservation) => (
          <tr>
             <td>{reservation.workout.title}</td>
             <td>{reservation.date}</td>
             <td>{reservation.time}</td>
             <td>{reservation.trainer.name}</td>
             <td>{reservation.gym.name}</td>
             
             </tr>
          ))}
        </tbody>
      </table>
    
  );
}

export default MyWorkoutPlans;
