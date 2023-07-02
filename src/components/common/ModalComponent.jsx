
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import '../common/modal.css'
import {UserEdited} from '../../api/Profileapi';
import {toast} from 'react-toastify';
export default function ModalComponent({toggleModal}) {

// BELOW STATE IS TO GET AND SET THE USER UPLOADED IMAGE
  const [imageUpload, setimageUpload] = useState(null);

// BELOW STATE IS TO GET AND SET THE USER UPLOADED TEXT DATA

  const [credentials, setCredentials] = useState({});

  // BELOW FUNCTION IS TO UPDATE ALL THE TEXT DATA (INCLUDE IMAGE ALSO)

  const handleEditedData = async () => {
    try {
      let userID = localStorage.getItem('userID');
      let usereditdata = await UserEdited(userID,credentials.fullname, credentials.age, credentials.motto, imageUpload);
      toast('User edited');
      toggleModal();
    } catch (error) {
      toast(error);
    }
  }
    return (
      <div className='modalhaiye'>

          <input type='text'
           placeholder='Enter your name' 
           className='fullname'
           name='fullname'
           onChange={(event) => setCredentials({...credentials, fullname: event.target.value})}
           />

          <input type='number' 
          placeholder='Enter your age' 
          className='age'
          name='age'
          onChange={(event) => setCredentials({...credentials, age: event.target.value})}
          />

          <input type='file' 
          placeholder='Enter your image' 
          className='image'
          onChange={(event) => setimageUpload(event.target.files[0])}
          />

          <textarea className='motto' 
          placeholder='enter your lifes motto'
          name='motto'
          onChange={(event) => setCredentials({...credentials, motto: event.target.value})}
          />

          <input type='submit' 
          placeholder='Submit' 
          className='submit'
          onClick={handleEditedData}
          />

      </div>
    )
}

