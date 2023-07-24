/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import './contribute.css'
export default function ContributeComp() {
  return (
    <div className='contribution'>
      <h2>Contribute to UnixChange</h2>
      <p>
        UnixChange is an open source project, and we welcome contributions from the community. Whether you're a developer, designer, or anyone with ideas to improve the platform, your contributions are valuable.
      </p>
      <a href='https://github.com/shrey802/unixchange' target='_blank' rel='noopener noreferrer'>
        <AiFillGithub style={{ marginBottom: '-5px' }} /> Contribute on GitHub
      </a>
      <p>Join us in making UnixChange better for everyone!</p>
    </div>
  );
}
