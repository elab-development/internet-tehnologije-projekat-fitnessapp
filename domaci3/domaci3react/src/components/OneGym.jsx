import React from 'react'
import teretana from '../slike/teretana.jpg';
function OneGym({gyms}) {
  return (
    <div className="card">
    <div className="row g-0">
      <div className="col-5 col-sm-4">
    <img src={teretana} width={300} height={150}/>
      </div>
      <div className="col-7 col-sm-8">
        <div className="card-body">
          <h5 className="card-title">Name: {gyms.name}</h5>
          <p className="card-text">Street: {gyms.email} </p>
          <p className="card-text">Street number: {gyms.streetNumber}</p>
          <p className="card-text">City: {gyms.city}</p>
          
          
          
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default OneGym