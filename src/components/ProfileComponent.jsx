/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import ModalComp from '../components/common/ModalComponent'
import ProfiledataDisplay from './common/ProfiledataDisplay';
import { DisplayDataonDiv} from '../api/Profileapi';
export default function ProfileComponent(){
  
   const [isModalOpen, setModalproperty] = useState(false);
   const [userkaData, setUserkaData] = useState({});
  
  const userID = localStorage.getItem('userID');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DisplayDataonDiv(userID);
        setUserkaData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [!isModalOpen]);
   const toggleModal = () => {
    setModalproperty(!isModalOpen);
  };
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <ProfiledataDisplay userkaimage={userkaData.profilepicture} fullname={userkaData.fullname} age={userkaData.age} motto={userkaData.motto}/>
        </div>
        <button onClick={toggleModal} 
        style={{marginTop: '30px', height: '30px', width:'auto', fontSize: '23px', marginBottom: '30px'}}>
          Edit Profile
        </button>
        {isModalOpen && <ModalComp toggleModal={toggleModal}/>}
      </div>
    )
}
