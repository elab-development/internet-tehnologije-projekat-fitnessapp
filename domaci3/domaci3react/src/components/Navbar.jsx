import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Navbar({token,setToken}) {
  const [role,setRole]=useState();
  const navigate=useNavigate();
  useEffect(() => {
      if (token) {
          const userRole = sessionStorage.getItem('role');  
          setRole(userRole);  
     }
  }, [token]);

  const handleLogout=async()=>{
    try{
    await axios.post('api/logout',null,{
      headers:{
        Authorization: `Bearer ${token}`  
      }
    });
      setToken(null);
      navigate('/');
      localStorage.clear();
      }catch(error){
        console.error("Error");
    }
  };
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">My fitness portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/workouts">Workouts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/gyms" >Gyms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/trainers" >Trainers</Link>
        </li>
        {token && role==='member' && (
          <>
          <li className="nav-item">
            <Link className="nav-link " to="/myWorkouts" >MyWorkoutPlan</Link>
          </li>
          </>
          )}
           {token && role==='admin' && (
          <>
          <li className="nav-item">
            <Link className="nav-link " to="/adminWorkouts" >CRUD Workouts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/adminTrainers" >CRUD Trainers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/adminGyms" >CRUD Gyms</Link>
          </li>
          </>
          )}
      </ul>
      
        
      <form className="d-flex">
      {token==null ?(
        <>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
        <Link className="btn btn-outline-light" to="/login" style={{marginRight:2,marginLeft:2}}>Login</Link>
        </>
        ):(
          <>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      <button className="btn btn-outline-light"  onClick={handleLogout} style={{marginRight:2,marginLeft:2}}>Logout</button>
      </>
      )}
      </form>
     
      
    </div>
  </div>
</nav>
  );
};

export default Navbar