import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import WorkerLogin from './components/WorkerLogin/WorkerLogin.jsx'
import axios from 'axios'
import SignUp from './components/signUpWorker/SignUp.jsx'
import OneWorker from './components/OneWorker/OneWorker.jsx'
import AllWorker from './components/AllWorker/AllWorker.jsx'


function App() {
  const [data,setData]=useState([])
  const [view,setView]=useState('home')
  
  useEffect(()=>{
    axios.get("/api/workers")
    .then((res)=>setData(res.data))
    .catch(err=>{console.log(err)})
  },[])
const login=(pass)=>{
data.map((e,i)=>{
  if (e.password===pass){
    setData([data[i]])
    changeView("oneworker")
  }
  else{alert('rong password')}
})
}
  const changeView=(view)=> {
     setView(view)
   }
   const renderView=()=> {
     if (view === "home") {
        return <Home changeView={changeView}/>
     } else if (view === "login") {
      return <WorkerLogin  data={data}  login={login}  />;
   } else if (view === "signup") {
     return   <SignUp/>
   }
    else if (view === "allworker") {
     return   <AllWorker data={data} changeView={changeView}/>
   }
    else if (view === "oneworker") {
     return   <OneWorker data={data}/>
   }

   }
  return (
  <>

  <Navbar changeView={changeView}/>
  

    {renderView()}
  </>
  )
}

export default App


ReactDOM.render(<App />, document.getElementById('app'))
