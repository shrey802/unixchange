/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import ModalComp from '../components/common/ModalComponent'
import ProfiledataDisplay from './common/ProfiledataDisplay';
export default function ProfileComponent(){
   const [isModalOpen, setModalproperty] = useState(false);
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <ProfiledataDisplay/>
        </div>
        <button onClick={() => setModalproperty(!isModalOpen)} 
        style={{marginTop: '30px', height: '30px', width:'auto', fontSize: '23px', marginBottom: '30px'}}>
          Edit Profile
        </button>
        {isModalOpen && <ModalComp />}
      </div>
    )
}
