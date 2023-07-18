/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import { AiFillPhone, AiFillCodeSandboxSquare } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import '../common/navbar.css';
import { Logout } from '../../api/Authapi';
import { useNavigate } from 'react-router-dom';

export default function NavbarComponent() {
  const navigate = useNavigate();

  function navigation() {
    Logout();
    navigate('/login');
  }

  function contriNavigate() {
    navigate('/contribute');
  }

  function about() {
    navigate('/about');
  }

  function handleContact() {
    navigate('/contact');
  }

  function handleProfile() {
    navigate('/profile');
  }

  return (
    <div className='wholedirtynavbar'>
      <nav className='navbarhaiye'>
        <h1 className='headingofnavbar'>
          UnixChange <FaUniversity size={25} />
        </h1>
        <div className='navbar-links'>
          <p className='navbar-link' onClick={handleContact}>
            <AiFillPhone size={25} /> Contact
          </p>
          <p className='navbar-link' onClick={about}>
            <SiAboutdotme size={25} /> About
          </p>
          <p className='navbar-link' onClick={contriNavigate}>
            Wanna Contribute? <AiFillCodeSandboxSquare size={25} />
          </p>
          <p className='navbar-link' onClick={handleProfile}>
            Your Profile <GiPlagueDoctorProfile size={25} />
          </p>
        </div>
        <button className='logoutofnavbar' onClick={navigation}>
          Log Out
        </button>
      </nav>
    </div>
  );
}
