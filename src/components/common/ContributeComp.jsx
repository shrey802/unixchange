/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {AiFillGithub} from 'react-icons/ai'
export default function ContributeComp() {
    return (
      <div className='contribution' style={{textAlign: 'center', fontSize: "23px"}}>
        <h4>UnixChange is an open source project. Feel free to contribute it.</h4>
        <a href=''><AiFillGithub/> Contribute on Github</a> <br/>
        <p>Adding more information later on.</p> 
      </div>
    )
}