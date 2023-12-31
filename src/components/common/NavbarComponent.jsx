/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Logout } from '../../api/Authapi';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(false); // State to manage Navbar collapse

  function navigation() {
    Logout();
    navigate('/login');
  }

  function contriNavigate() {
    navigate('/contribute');
    closeNavbar();
  }

  function about() {
    navigate('/about');
    closeNavbar();
  }

  function handleContact() {
    navigate('/contact');
    closeNavbar();
  }

  function handleProfile() {
    navigate('/profile');
    closeNavbar();
  }

  function faq() {
    navigate('/faqs');
    closeNavbar();
  }

  function toggleNavbar() {
    setNavOpen(!isNavOpen); // Toggle the state when the hamburger menu is clicked
  }

  function closeNavbar() {
    setNavOpen(false); // Close the Navbar when a link is clicked
  }

  return (
    <div className='wholedirtynavbar'>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark navbarhaiye'>
        <Link to='/' className='navbar-brand headingofnavbar'>
          UnixChange 
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleNavbar} // Call the toggleNavbar function when the button is clicked
          aria-controls='navbarCollapse'
          aria-expanded={isNavOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id='navbarCollapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link' onClick={handleContact}>
               Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' onClick={about}>
               About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contribute' className='nav-link' onClick={contriNavigate}>
                Contribute
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-link' onClick={handleProfile}>
                Your Profile 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/faqs' className='nav-link' onClick={faq}>
                Support
              </Link>
            </li>
          </ul>
        </div>
        <button className='btn btn-danger logoutofnavbar' onClick={navigation}>
          Log Out
        </button>
      </nav>
    </div>
  );
}
