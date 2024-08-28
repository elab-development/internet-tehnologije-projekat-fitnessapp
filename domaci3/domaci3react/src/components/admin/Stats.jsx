import React from 'react'
import RReact, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
function Stats() {
    const [statistics, setStatistics] = useState(null);
    const getStats= async () => {
        try {
          const token = sessionStorage.getItem('token');
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          };
    
          const response = await axios.get('http://127.0.0.1:8000/api/admin/stats', {
            headers: headers,
          });
    
          if (!response.data) {
            throw new Error('Error!');
          }
          setStatistics(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      useEffect(() => {
        getStats();
      }, []);
      const servicesData = {
        labels: statistics ? Object.keys(statistics.ukupan_broj_rezervacija_po_usluzi) : [],
        datasets: [
          {
            label: 'Broj rezervacija po usluzi',
            data: statistics ? Object.values(statistics.ukupan_broj_rezervacija_po_usluzi) : [],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
        ],
      };
  return (
    <div>Stats</div>
  )
}

export default Stats