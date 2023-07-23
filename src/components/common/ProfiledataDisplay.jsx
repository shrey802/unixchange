/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../common/profiledata.css';

export default function ProfiledataDisplay(props) {
  // DISPLAY ALL THE PROFILE DATA
  return (
    <div className='profileUserData'>
      <div className='profileText'>
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
      </div>
      <div className='profileditimagecontainer'>
        <img className='profileditimage' src={props.userkaimage} alt='Profile' />
      </div>
    </div>
  );
}
