/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../common/profiledata.css';

export default function ProfiledataDisplay(props) {

    return (
      <div className='profileUserData'>
        {/* <p>Mail : {localStorage.getItem('userEmail')}</p> */}
        <h4 className='profileditname'>Name: {props.fullname}</h4>
        <h4 className='profileditage'>Age: {props.age}</h4>
        <h4 className='profileditmotto'>Motto: {props.motto}</h4>
      </div>
    )
}

