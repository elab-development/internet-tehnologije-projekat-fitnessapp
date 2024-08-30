import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Pagination, usePaginationParams } from "react-laravel-pagination";
import OneWorkout from './OneWorkout';
function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [info, setInfo] = useState({});
  const url = "api/workoutHome";
  
  const fetchWorkouts = (url) => {
    axios
      .get(url)
      .then((data) => {
        setWorkouts(data.data.results.data);
        //console.log(data.data.results.data);
        setInfo(data.data.results);
        //console.log(data.data.results.next_page_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
    
  const handleNextPage = () => {
    fetchWorkouts(info.next_page_url);
    window.scrollTo(0, 0);
  };
  
  const handlePreviousPage = () => {
    fetchWorkouts(info.prev_page_url);
    window.scrollTo(0, 0);
  };
    
  useEffect(() => {
    fetchWorkouts(url);
  }, []);
  
  
  return (
    <>
      
  
     
        <nav>
  
          <ul className="pagination justify-content-center">
            {info.prev_page_url ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next_page_url ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
  
        </nav>
      
        
      {workouts.map((workouts) => (
              <OneWorkout key={workouts.id} workouts={workouts} />  
            ))}
  
      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev_page_url ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next_page_url ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
        
    </>
  );
}

export default Workouts