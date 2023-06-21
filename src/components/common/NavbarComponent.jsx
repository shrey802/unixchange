/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {FaUniversity} from 'react-icons/fa'
import {AiFillPhone, AiFillCodeSandboxSquare} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {GiPlagueDoctorProfile} from 'react-icons/gi'
import '../common/navbar.css'
import {Logout} from '../../api/Authapi';
import { useNavigate } from 'react-router-dom';
export default function NavbarComponent() {
const navigate = useNavigate();
function navigation(){
    Logout();
    navigate('/login');
}
function contriNavigate(){
  navigate('/contribute');
}
function about(){
  navigate('/about');
}
function handleContact(){
  navigate('/contact');
}
function handleProfile(){
  navigate('/profile');
}
  return (
    <div className='wholedirtynavbar'>
        <nav className='navbarhaiye'>
            
                <h1 className='headingofnavbar'>UnixChange <FaUniversity size={25}/> </h1>
        
                <p className='contactofnavbar' onClick={handleContact}>Contact <AiFillPhone size={25}/></p>
                <p className='aboutofnavbar' onClick={about}>About <SiAboutdotme size={25}/></p>
                <p className='contributeofnavbar' onClick={contriNavigate}>Wanna Contribute?
                 <AiFillCodeSandboxSquare size={25}/></p>
            
                <p className='profileofnavbar' onClick={handleProfile}>your profile <GiPlagueDoctorProfile size={25}/></p>

                <button className='logoutofnavbar' onClick={navigation}>LogOut</button>
           
        </nav>
    </div>
  );
}

