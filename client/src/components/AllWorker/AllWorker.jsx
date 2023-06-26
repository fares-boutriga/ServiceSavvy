import React from 'react'
import './AllWorker.css'
function AllWorker({changeView}) {
  return (
    <div>
      <h2>All workers</h2>

<div className="card" onClick={()=>{changeView("oneworker")}}>
  <img id='img1' src="https://res.cloudinary.com/dt7t7wjql/image/upload/v1687750624/e50uwamyjhv1qctafvje.jpg" alt="Avatar" />
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
    </div>
  )
}

export default AllWorker
