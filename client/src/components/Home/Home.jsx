import React from 'react'
import './Home.css'
import img from './pictures'
const Home=({changeView})=> (
  <>
  <img id='bigimg' src="https://www.outboundengine.com/wp-content/uploads/1133_1_rawpixel-711102-unsplash.jpg" alt="" />
  <div className='home'>
  {img.map((e,i)=>(
    <div key={i} className="card" onClick={()=>{changeView("allworker")}}>
      <img src={e.img}/>
      <p>{e.titel}</p>
    </div>
  ))}
  </div>
  </>
)

export default Home
