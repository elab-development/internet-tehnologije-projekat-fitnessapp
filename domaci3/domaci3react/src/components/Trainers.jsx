import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import OneTrainer from './OneTrainer';
function Trainers() {
 
  const [trainers, setTrainers] = useState([]);
  
  const token = sessionStorage.getItem('authToken');
  useEffect(() => {
    const token = sessionStorage.getItem('token');
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
  
    return (
     
  <div className="row gx-5">
     <div className="col">
       <div className="p-3 border bg-light">
        
          
            {
            trainers.map((trainer) => (
              <OneTrainer key={trainer.id} trainers={trainer}  />  
            ))}
            
       </div>
     </div>
    
   </div>
  );
};

export default Trainers
   