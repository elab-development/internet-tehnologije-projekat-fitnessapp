import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';

import { Chart } from 'react-google-charts';


function Stats() {
    const [statistics, setStatistics] = useState(null);
    
      useEffect(() => {
        const getStats= async () => {
          console.log('Fetching statistics...');   
          try {
            const token = sessionStorage.getItem('authToken');
            const response = await axios.get('api/admin/stats', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setStatistics(response.data);
          } catch (error) {
            console.error('Error fetching statistics:', error);
          }
        };
      
        getStats();
      }, []); 
      
      const employeesData = {
        labels: statistics ? Object.keys(statistics.ukupan_broj_rezervacija_po_zaposlenom) : [],
        datasets: [
          {
            label: 'Broj rezervacija po zaposlenom',
            data: statistics ? Object.values(statistics.ukupan_broj_rezervacija_po_zaposlenom) : [],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      };
      const servicesData = {
        labels: statistics ? Object.keys(statistics.number_of_reservations_by_workout) : [],
        datasets: [
          {
            label: 'Broj rezervacija po usluzi',
            data: statistics ? Object.values(statistics.number_of_reservations_by_workout) : [],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
        ],
      };
    
   
  return (
    <div> 
    <div>
       <h2>Ostali podaci</h2>
       <p>Ukupan broj zaposlenih: {statistics ? statistics.number_of_trainers : ''}</p>
       <p>Ukupan broj usluga: {statistics ? statistics.number_of_workouts : ''}</p>
       <p>Ukupan broj korisnika: {statistics ? statistics.number_of_members : ''}</p>
       <Chart
      width={'500px'}
      height={'300px'}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={servicesData}
      // ... other props ...
    />
     
    </div>
   </div>
   
  )
};

export default Stats