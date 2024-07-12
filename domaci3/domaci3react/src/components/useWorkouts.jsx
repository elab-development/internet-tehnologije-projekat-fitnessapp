import axios from "axios";
import { useEffect, useState } from "react";


const useWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
  const token = sessionStorage.getItem('authToken');
 
  useEffect(() => {
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get('api/workout', config)
      .then((response) => {
        setWorkouts(response.data.data);
      
      })
      .catch((err) => {
        console.log("error");
      });
      }, []);
    return [workouts, setWorkouts];
  };

  export default useWorkouts;