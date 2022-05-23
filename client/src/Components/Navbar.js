import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadUser, logout } from '../JS/Actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import music from "../Assets/music.svg";


const Navbar = () => {

  const dispatch = useDispatch()
  let navigate = useNavigate();
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  const logoutNow = (e) => {
    e.preventDefault()
      dispatch(logout())
      navigate('/')
  }



  return (
      <div className='navbar'>
        <div className='navlogo'>
          <img src={music} alt='music'/>
        </div>
        <div className='navbaritems'>
          <button id='logouticon' onClick={logoutNow}>Sign Out</button>
        </div>
      </div>      
  )
}

export default Navbar;
