import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../JS/Actions/authActions';
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";


const Register = () => {

  const [info, setInfo] = useState({
    username:'',
    email:'',
    password: '',
  })



  const handleChange = e => {
    setInfo({...info, [e.target.name]: e.target.value})
  }


  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  let navigate = useNavigate();

  useEffect(() => {
    if(auth.isAuthenticated){
       return navigate('/dashboard')
    }
}, [auth.isAuthenticated])



  const registerNow = (e) => {
    (e).preventDefault();
    dispatch(register(info))
  }
  

  return (
    <div className="signupform">
      <div className="signup">
        <div>
           <input placeholder="email" type="email" name="email" onChange={handleChange}/>
           <MdEmail id="authicon"/>  
        </div>
        <div>
           <input placeholder="password" type="password" name="password" onChange={handleChange}/>
           <MdLock id="authicon"/> 
        </div>
      </div>
      <button className="submitbtn" onClick={registerNow}>Submit</button>
    </div>
  )
}

export default Register;