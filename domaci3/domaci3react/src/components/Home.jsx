import React from 'react'
import cardio from '../slike/cardio.png';
import hiit from '../slike/hiit.png';
import yoga from '../slike/yoga.png';
import stretching from '../slike/stretching.png';
import pilates from '../slike/pilates.png';
import strength from '../slike/strength.png';
function Home({workouts}) {
  const images = [
    {
      name: "Cardio",
      image: cardio,
    },
    {
      name: "HIIT",
      image: hiit,
    },
    {
      name: "Pilates",
      image: pilates,
    },
    {
      name:"Yoga",
      image: yoga,
    },
    {
      name:"Strength",
      image: strength,
    },
    {
      name:"Stretching",
      image: stretching
    }

  ];
  return (
    <div id="carouselWithControls" className="carousel slide align-middle"data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={cardio} className="d-block w-100  align-middle" alt="Cardio"/>
    </div>
    <div className="carousel-item">
      <img src={hiit} className="d-block  w-100" alt="High intensity"/>
      <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
    </div>
    <div className="carousel-item">
      <img src= {yoga} className="d-block w-100" alt="Yoga"/>
    </div>
    <div className="carousel-item">
      <img src={strength} className="d-block  w-100" alt="Strength"/>
    </div>
    <div className="carousel-item">
      <img src={pilates} className="d-block  w-100" alt="Pilates"/>
    </div>
    <div className="carousel-item">
      <img src={stretching} className="d-block  w-100" alt="Stretching"/>
    </div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
  )
}

export default Home