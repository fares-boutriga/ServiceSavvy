import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
  const [file, setFile] = useState("https://res.cloudinary.com/dt7t7wjql/image/upload/v1687750624/e50uwamyjhv1qctafvje.jpg");
  const [imgUrl,setImgUrl]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [type,setType]=useState("")
  const [experience,setExperience]=useState("")
  const [phone,setPhone]=useState(0)
  const [email,setEmail]=useState("")
  const [info,setInfo]=useState("")
  
  const uploadImage =async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "farescloud");
    console.log(form)
    await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
      console.log(res.data.secure_url)
     setImgUrl(res.data.secure_url)
     
    })
    .catch((err)=>{console.log(err)})
  };

  const addWorker= async()=>{
    await axios.post("http://127.0.0.1:3000/api/workers/add", 
    {
      name:name,
      password:password,
      image:imgUrl,
      typeWork:type,
      experience:experience,
      phone:phone,
      email:email,
      info:info
      
    }).then((res) => {
      alert("welcom",res.data.name)
     
     
    })
    .catch((err)=>{console.log(err)})
  }
  return (
   
    <div>
     
        <div>
          <label className="container" >Choose a file:</label>
          <input
            className="inpdddut"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button  className="inpdddut" onClick={()=>{uploadImage()}}>
            Send
          </button>
          
        </div>
        <div className="form">
          <label>
            Name:
            <input className='text' type="text" onChange={(e)=>setName(e.target.value)} value={name}  />
          </label>
          <br />
          <label>
            Password:
            <input className='text' type="password"  onChange={(e)=>setPassword(e.target.value)} value={password} />
          </label>
          <br />
          <label>
            Type of Work:
            <input className='text' type="text"  onChange={(e)=>setType(e.target.value)} value={type}/>
          </label>
          <br />
          <label>
            Experience:
            <input className='text' type="text"  onChange={(e)=>setExperience(e.target.value)} value={experience} />
          </label>
          <br />
          <label>
            Phone Number:
            <input className='text' type="tel"  onChange={(e)=>setPhone(e.target.value)} value={phone}/>
          </label>
          <br />
          <label>
            Email:
            <input className='text' type="email"  onChange={(e)=>setEmail(e.target.value)} value={email} />
          </label>
          <br />
          <label>
            About You:
            <textarea name="aboutYou" onChange={(e)=>setInfo(e.target.value)} value={info}></textarea>
          </label>
          <br />
          <button className='text' onClick={()=>addWorker().then(()=>{alert("done")})}>Submit</button>
     
        </div>
    
      {console.log(imgUrl)}
    </div>
  );
}

export default SignUp;
