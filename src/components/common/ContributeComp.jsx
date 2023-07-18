/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function ContributeComp() {
  return (
    <div className='contribution' style={{ textAlign: 'center', fontSize: '23px', marginTop: '50px' }}>
      <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '20px' }}>Contribute to UnixChange</h2>
      <p style={{ fontSize: '20px', color: '#555', marginBottom: '20px' }}>
        UnixChange is an open source project, and we welcome contributions from the community. Whether you're a developer, designer, or anyone with ideas to improve the platform, your contributions are valuable.
      </p>
      <a href='https://github.com/shrey802/unixchange' target='_blank' rel='noopener noreferrer' style={{ display: 'inline-block', color: '#008080', fontSize: '24px', textDecoration: 'none' }}>
        <AiFillGithub style={{ marginBottom: '-5px' }} /> Contribute on GitHub
      </a>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>Join us in making UnixChange better for everyone!</p>
    </div>
  );
}
