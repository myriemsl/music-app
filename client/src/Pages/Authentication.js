import React, {useState} from 'react';
import Register from './Register';
import Login from './Login';
import '../Style/authStyle.css'; 
import authpic from '../Assets/authpic.svg'
import music from '../Assets/music.svg'


const Authentication = () => {

  const [isAuthenticated, setisAuthenticated] = useState(true);

  return (
    <section className="authpage">
    <div className="authbackground">
     <img src={music} alt="authbackground"></img>
    </div>
    <div className="authformbackground">
    <div className="authform">
      <div className="authpic">
       <img src={authpic} alt="authpic" ></img> 
      </div>
      <div className="authbtnbox"> 
       <div id="authbtn" className={isAuthenticated ? "loginbtn":"signupbtn"}></div>
        <button  className="togglebtn" onClick={() => setisAuthenticated(true)}>Log in</button>
        <button  className="togglebtn"  onClick={() => setisAuthenticated(false)}>Sign up</button>
      </div>    
      {isAuthenticated ? <Login /> : <Register />}                        
    </div>          
    </div>
  </section>
  )
}

export default Authentication;