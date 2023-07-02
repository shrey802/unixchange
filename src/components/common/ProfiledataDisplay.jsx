/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../common/profiledata.css';

export default function ProfiledataDisplay(props) {

    return (
      <div className='profileUserData'>
        
        <h4 className='profileditname'>
          <u>
            <i>Name: </i>
          </u>
          {props.fullname}
        </h4>
        <h4 className='profileditage'>
          <u>
            <i>Age: </i>
          </u>
          {props.age}
        </h4>
        <h4 className='profileditmotto'>
          <u>
          <i>Motto: </i>
          </u>
          {props.motto}
        </h4>
        <div className='profileditimagecontainer'>
          <img className='profileditimage' src={props.userkaimage}/>
        </div>
        
      </div>
    )
}

