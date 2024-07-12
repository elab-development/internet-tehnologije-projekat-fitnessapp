import React from 'react'
import OneGym from './OneGym';
import axios from 'axios';
import { useState,useEffect } from 'react';
function Gym() {
    const [gyms, setGyms] = useState([]);
  
    useEffect(() => {
      const token = sessionStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios.get('api/gym')
        .then((response) => {
          setGyms(response.data.data);
          
        })
        .catch((err) => {
          console.log('Error');
          
        });
    }, []);
  return (
    <div className="row gx-5">
    <div className="col">
      <div className="p-3 border bg-light">
         
           {gyms.map((g) => (
             <OneGym key={g.id} gyms={g}  />  
           ))}
           
      </div>
    </div>
   
  </div>
  );
};

export default Gym