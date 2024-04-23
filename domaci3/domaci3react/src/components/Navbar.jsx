import React from 'react'
import { IoGitNetworkOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Navbar({calorieCounter,token}) {
  
  function handleLogout(){
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"), 
      },
    };
    axios(config)
    .then(function(response)  {
    console.log(JSON.stringify(response.data));
    window.sessionStorage.setItem("auth_token",null);
    })
      .catch((error) => {
    console.log(error);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Fitness Portal</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse show" id="navbarDark">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/workouts">Workouts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Trainers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Workout plan</a>
          </li>
          <Link to="/">My workouts</Link>
        
        <p className='counter'>Calorie counter: {calorieCounter}</p>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
          {token==null ? (
          <Link to='/login'><button className="btn btn-outline-light "  type="submit" style={{marginLeft:5}}>Login</button></Link>
          ):(
          <Link to='/'><button className="btn btn-outline-light " type="button" 
          style={{marginLeft:5}} onClick={handleLogout}>Logout</button></Link>
          )}
        </form>
        
      </div>
    </div>
    
  </nav>
  <Outlet/>
  </div>
      

    
      
      
    
  )
}

export default Navbar