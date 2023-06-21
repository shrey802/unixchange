/* eslint-disable no-unused-vars */
import React from 'react'
import '../common/profiledata.css';
export default function ProfiledataDisplay() {
    return (
      <div className='profileUserData'>
        <p>Mail : {localStorage.getItem('userEmail')}</p>
        <h2>Name: </h2>
      </div>
    )
}
