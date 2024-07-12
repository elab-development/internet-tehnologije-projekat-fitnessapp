import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function GymsCRUD() {
    const [gyms,setGyms]=useState([]);
    const token = sessionStorage.getItem('authToken');
    useEffect(() => {
        
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get('api/gyms', config)
        .then((response) => {
          setGyms(response.data.data);
        
        })
        .catch((err) => {
          console.log("error");
        });
        }, []);
        const navigate = useNavigate()
        const gotToNewPage=()=>{
          navigate("/addGyms");
        }
        const removeGym = async id => {
          try {
            const token = sessionStorage.getItem('authToken');
            await axios.delete(`api/gyms/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            const updatedGyms= gyms.filter(gym => gym.id !== id);
            setGyms(updatedGyms);
            alert("Gym succesfully deleted");
          } catch (error) {
            console.error('Error deleting gym:', error);
            alert("Error while deleting");
          }
        };

          
  return (
   <div className="container container_overflow">
    <div className="row">
        <div className="col-12">
            <h5 className="mb-4">Gyms</h5>
            <p className="text-danger"></p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td scope='col'>$r.no</td>
                        <td scope='col'>Name</td>
                        <td scope='col'>City</td>
                        <td scope='col'>Street number</td>
                        <td scope='col'>Street</td>
                        <td scope='col' style={{width:200}}>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    gyms.map((gymData,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{gymData.name}</td>
                            <td>{gymData.city}</td>
                            <td>{gymData.streetNumber}</td>
                            <td>{gymData.street}</td>
                            
                            <td>
                            <Link to={`/editgym/${gymData.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                            <button  type='button' onClick={() => removeGym(gymData.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
                <tfoot>
                  <tr>
                    <td><button   className='btn btn-success' onClick={()=>gotToNewPage()}>Add gym</button></td>
                  </tr>
                </tfoot>

            </table>
        </div>
    </div>
   </div>
   
  )
}

export default GymsCRUD