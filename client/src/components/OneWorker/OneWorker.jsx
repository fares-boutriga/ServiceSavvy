import React from 'react'
import './OneWorker.css'
import Review from '../Review/Review.jsx'
function OneWorker({data}) {

  return (
  
    <div className='one'>
      {console.log("hi",data)}
        {data.map((e)=>(
         <div className="profile" key={e._id}>
         <img
           className="profile-image"
           src="https://res.cloudinary.com/dt7t7wjql/image/upload/v1687750624/e50uwamyjhv1qctafvje.jpg"
           alt="Profile Image"
         />
         <div className="profile-name">{e.name}<br /> {e.typeWork} </div>
         <div>
           <label htmlFor="">email:
           <p>
              {e.email}</p></label>
           <label htmlFor="">Phone number:
           <p>
               +216 {e.phone}</p></label>
           <label htmlFor="">Experiance:
           <p>
               {e.typeWork}</p></label>
         </div>
         <div className="profile-bio">
           <h2>Info</h2>
          {e.info}
         </div>
   
       </div>
      ))}
      
    <Review/>
    </div>
  )
}

export default OneWorker
