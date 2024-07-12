import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
function useGyms() {
    const [gyms,setGyms]=useState([]);
    const token = sessionStorage.getItem('authToken');
    useEffect(() => {
        
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get('api/gym', config)
        .then((response) => {
          setGyms(response.data.data);
        
        })
        .catch((err) => {
          console.log("error");
        });
        }, []);
 
    return [gyms,setGyms];
  
}

export default useGyms