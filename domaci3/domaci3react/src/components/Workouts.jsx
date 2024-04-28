import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import OneWorkout from './OneWorkout';
import ReactPaginate from 'react-paginate';

function Workouts() {
 
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const workoutsPerPage = 2;

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get('api/workout', config)
    .then((response) => {
      setWorkouts(response.data.data);
    
    })
    .catch((err) => {
      console.log("error");
    });
    }, []);
const handlePageChange = ({ selected }) => {
  setCurrentPage(selected);
};
const pageCount = Math.ceil(workouts.length / workoutsPerPage);
const offset = currentPage * workoutsPerPage;
const currentWorkouts = workouts.slice(offset, offset + workoutsPerPage);
  
    return (
     
  <div className="row gx-5">
     <div className="col">
       <div className="p-3 border bg-light">
       <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
            {currentWorkouts.map((workout) => (
              <OneWorkout key={workout.id} workouts={workout}  />  
            ))}
       </div>
     </div>
    
   </div>
  );
};

export default Workouts
   