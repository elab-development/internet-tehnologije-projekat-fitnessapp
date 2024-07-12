import React from 'react'

function OneTrainer({trainers}) {
  return (
    <div className="card">
  <div className="card-header">
    Trainer
  </div>
  <div className="card-body">
    <h5 className="card-title">Name: {trainers.name}</h5>
    <p className="card-text">Email: {trainers.email}</p>
    <p className="card-text">Licence number: {trainers.licenceNumber}</p>
  </div>
  
</div>
  )
}

export default OneTrainer