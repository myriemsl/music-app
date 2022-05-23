import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";


const Login = () => {


  const [info, setInfo] = useState({  
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



  const loginNow = (e) => {
    (e).preventDefault();
    dispatch(login(info))
  }
  

  return (
    <div className='loginform'>
        <div className='login'>
           <input placeholder='email' type="email" name="email" onChange={handleChange}/>
           <MdEmail id="authicon"/>
        </div>
        <div>
           <input placeholder='password' type="password" name="password" onChange={handleChange}/>
           <MdLock id="authicon"/>   
        </div>
      <button className="submitbtn" onClick={loginNow}>Submit</button>
    </div>
  )
}

export default Login;