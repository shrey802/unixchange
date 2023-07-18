/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function AboutComponent() {
  return (
    <div className='about-section' style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '20px' }}>About Me</h2>
      <p className='about-text' style={{ fontSize: '20px', color: '#555', marginBottom: '20px' }}>
        Hey there! I'm Shreyash, a passionate developer and tech enthusiast. I love exploring new technologies and building awesome projects. Connect with me on social media to stay updated with my latest works and to get in touch!
      </p>
      <div className='social-links' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href='https://twitter.com/ShreyashPingle' target='_blank' rel='noopener noreferrer' style={{ display: 'inline-block', margin: '0 10px', color: '#008080', fontSize: '24px', textDecoration: 'none' }}>
          Twitter
        </a>
        <a href='mailto:shreypingle23@gmail.com' target='_blank' rel='noopener noreferrer' style={{ display: 'inline-block', margin: '0 10px', color: '#008080', fontSize: '24px', textDecoration: 'none' }}>
          Email
        </a>
      </div>
    </div>
  );
}
