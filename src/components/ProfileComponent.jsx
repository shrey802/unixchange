/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import ModalComp from '../components/common/ModalComponent'
import ProfiledataDisplay from './common/ProfiledataDisplay';
export default function ProfileComponent(){
   const [isModalOpen, setModalproperty] = useState(false);
   const toggleModal = () => {
    setModalproperty(!isModalOpen);
  };
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <ProfiledataDisplay/>
        </div>
        <button onClick={toggleModal} 
        style={{marginTop: '30px', height: '30px', width:'auto', fontSize: '23px', marginBottom: '30px'}}>
          Edit Profile
        </button>
        {isModalOpen && <ModalComp toggleModal={toggleModal}/>}
      </div>
    )
}
