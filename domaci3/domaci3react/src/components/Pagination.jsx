import React from 'react'

function Pagination({totalWorkouts,workoutsPerPage,setCurrentPage}) {
    let pages=[];
    //da zaokruzi na vecu vrednost, da ne dobijes manji broj strana ako je npr 2.4
    for(let i =1;i<=Math.ceil(totalWorkouts/workoutsPerPage);i++){
        pages.push(i);
    }
  return (
    
    <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li className="page-item position-absolute top-100 start-50 translate-middle "><a className="page-link" href="#">
      {pages.map((page,index)=>{
            return <button  key={index} onClick={()=>setCurrentPage(page)}>{page} </button>
        })}
        </a></li>
      
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Pagination