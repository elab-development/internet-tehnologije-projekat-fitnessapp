import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
function useTrainers() {
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
  return [trainers,setTrainers];
}

export default useTrainers