import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import style from "./Register.module.css"
import backGround from "./backGround.jpg"
function Register() {
  let [Register, setRegister] = useState({
    name: "",
    phoneNo: "",
    password: "",
    email: ""
  })
 let navigate= useNavigate()
  function handleChange(e) {
    let { name, value } = e.target
    setRegister({ ...Register, [name]: value })
  }
  function onsubmit(e) {
    e.preventDefault();
    console.log(Register);
    setRegister({
      name: "",
      phoneNo: "",
      password: "",
      email: ""
    })
axios.put('http://localhost:5000/0', Register)
  .then(() => {
    toast.success("Registered successfully");
    navigate('/home'); 
  })
  .catch(() => {
    toast.error("Failed to register");
  });
  }


  return (
    <>
    

      <div className={style.all}>

          <form onSubmit={onsubmit} className={style.formR}>
            <h1>Register</h1>
            <div className={style.data}> 
              <label htmlFor="name">name</label>
              <input id='name' type="name" name='name' value={Register.name} onChange={handleChange} /></div>
            <div className={style.data}>
              <label htmlFor="phoneNo">phoneNo</label>
              <input id='phoneNo' type="text" max={10} min={10} value={Register.phoneNo} name='phoneNo' onChange={handleChange} /></div>
            <div className={style.data}>
              <label htmlFor="email">email</label>
              <input id='email' type="email" value={Register.email} name='email' onChange={handleChange} />
            </div>
            <div className={style.data}>
              <label htmlFor="password">password</label>
              <input id='password' value={Register.password} type="password" name='password' onChange={handleChange} />
            </div>
            <button type='submit' className={style.btn}>Register</button>
            <button type="button" className={style.btn}>
             <Link to="/signup">SignUp</Link></button>
          </form>         
      </div>


    </>
  )
}

export default Register