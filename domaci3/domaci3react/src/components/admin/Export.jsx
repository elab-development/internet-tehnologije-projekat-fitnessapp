import React from 'react'
import axios from 'axios'
function Export() {
    const token = sessionStorage.getItem('authToken');
    const downloadPDF=async()=>{
        try {
            const token = sessionStorage.getItem('authToken');
            await axios.get(`api/export`, {
              headers: {
                Authorization: `Bearer ${token}`
              },
            });
            
            alert("Workout succesfully deleted");
          } catch (error) {
            console.error('Error deleting workout:', error);
           
          }
    }
  return (
    
    <div>
        <p>You can download workout data in PDF</p>
        <button   className='btn btn-success'>Export</button>
    </div>
  )
}

export default Export