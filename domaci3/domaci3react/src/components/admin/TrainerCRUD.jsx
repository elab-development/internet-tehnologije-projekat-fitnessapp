import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function TrainersCRUD() {
    const [trainers,setTrainers]=useState([]);
    const token = sessionStorage.getItem('authToken');
    useEffect(() => {
        
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get('api/trainer', config)
        .then((response) => {
          setTrainers(response.data.data);
        
        })
        .catch((err) => {
          console.log("error");
        });
        }, []);
        const navigate = useNavigate()
        const gotToNewPage=()=>{
          navigate("/addTrainers");
        }
        const removeTrainer = async id => {
          try {
            const token = sessionStorage.getItem('authToken');
            await axios.delete(`api/trainers/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            const updatedTrainers= trainers.filter(trainer => trainer.id !== id);
            setTrainers(updatedTrainers);
            alert("Trainer succesfully deleted");
          } catch (error) {
            console.error('Error deleting trainer:', error);
            alert("Error while deleting");
          }
        };

          
  return (
   <div className="container container_overflow">
    <div className="row">
        <div className="col-12">
            <h5 className="mb-4">Trainers</h5>
            <p className="text-danger"></p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td scope='col'>$r.no</td>
                        <td scope='col'>Name</td>
                        <td scope='col'>Email</td>
                        <td scope='col'>Licence number</td>
                        
                        <td scope='col' style={{width:200}}>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    trainers.map((trainerData,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{trainerData.name}</td>
                            <td>{trainerData.email}</td>
                            <td>{trainerData.licenceNumber}</td>
                            
                            
                            <td>
                            <Link to={`/edittrainer/${trainerData.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                            <button  type='button' onClick={() => removeTrainer(trainerData.id)} className="btn btn-danger">Delete</button>
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

export default TrainersCRUD