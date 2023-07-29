/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ThankYou() {
  const navigate = useNavigate();
  function home(){
    navigate('/home');
  }
  return (
    <div className='thankyou' style={{fontSize: '30px', color: 'darkblue', textAlign: 'center', cursor: 'pointer'}}>
      ThankYou. <br/>
      <p onClick={home}>go back</p>
    </div>
  )
}
