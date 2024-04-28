import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function WorkoutsCRUD() {
    const [workouts,setWorkouts]=useState([]);
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
        const navigate = useNavigate()
        const gotToNewPage=()=>{
          navigate("/addWorkouts");
        }
        const removeWorkout = async id => {
          try {
            const token = sessionStorage.getItem('authToken');
            await axios.delete(`api/workouts/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            const updatedWorkouts= workouts.filter(workout => workout.id !== id);
            setWorkouts(updatedWorkouts);
            alert("Workout succesfully deleted");
          } catch (error) {
            console.error('Error deleting workout:', error);
            alert("Error while deleting");
          }
        };

          
  return (
   <div className="container container_overflow">
    <div className="row">
        <div className="col-12">
            <h5 className="mb-4">Workouts</h5>
            <p className="text-danger"></p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td scope='col'>$r.no</td>
                        <td scope='col'>Title</td>
                        <td scope='col'>Duration</td>
                        <td scope='col'>Description</td>
                        <td scope='col'>Calories</td>
                        <td scope='col'>Price</td>
                        <td scope='col'>Image</td>
                        <td scope='col' style={{width:200}}>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    workouts.map((workoutData,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{workoutData.title}</td>
                            <td>{workoutData.duration}</td>
                            <td>{workoutData.description}</td>
                            <td>{workoutData.calorie_burn}</td>
                            <td>{workoutData.price}</td>
                            <td><img src="http://127.0.0.1:8000/storage/${workoutData.image}" alt="" width={30} height={30} /></td>
                            <td>
                            <Link to={`/editworkout/${workoutData.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                            <button  type='button' onClick={() => removeWorkout(workoutData.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
                <tfoot>
                  <tr>
                    <td><button   className='btn btn-success' onClick={()=>gotToNewPage()}>Add workout</button></td>
                  </tr>
                </tfoot>

            </table>
        </div>
    </div>
   </div>
   
  )
}

export default WorkoutsCRUD