import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import OneTrainer from './OneTrainer';
import { Link } from 'react-router-dom';
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
  
  const download = async() => {
    try{
      const response=await axios
      .get('api/workout.pdf',{responseType:'blob'})
      const pdfFile=new Blob([response.data],{type:"application/pdf"});
      const url=window.URL.createObjectURL(pdfFile);
      const tempLink=document.createElement("a");
      tempLink.href=url;
      tempLink.setAttribute(
      "download",
      `workouts.pdf`
      );
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);
    }catch(error){
      console.log(error);
    }
  }
    return (
     
  <div className="row gx-5">c
     <div className="col">
       <div className="p-3 border bg-light">
         <button onClick={download}>Download available workouts!</button>
          
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
   