import React from 'react'

function Pagination({totalWorkouts,workoutsPerPage,setCurrentPage}) {
    let pages=[];
    //da zaokruzi na vecu vrednost, da ne dobijes manji broj strana ako je npr 2.4
    for(let i =1;i<=Math.ceil(totalWorkouts/workoutsPerPage);i++){
        pages.push(i);
    }
  return (
    <div className='pagination'>
        {pages.map((page,index)=>{
            return <button  key={index} onClick={()=>setCurrentPage(page)}>{page} </button>
        })}
    </div>
  )
}

export default Pagination