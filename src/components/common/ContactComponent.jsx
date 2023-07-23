/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../common/contact.css';
import {toast} from 'react-toastify';
import {getQuery} from '../../api/Queryapi';
export default function ContactComponent(){
    const [credentials, setCredentials] = useState({});
  const addingQuery = async() => {
    try {
        const response = await getQuery(credentials.querymail, credentials.query);
        toast('Query added in database');
        
    } catch (error) {
        toast.error(error);
    }
  }
    return (
      <div className='contactcomp'>
      <h3 className='contactheader'>
          Put your queries here I'll reply you as soon as possible.
      </h3>
      <div className='contactform'>
          <label>your unixchange mail address</label>

          <input 
          type='email' 
          placeholder='XXXXXXXXXXXXXXXXXX' 
          name='querymail' 
          className='queryemail'
          onChange={(event) => setCredentials({...credentials, querymail: event.target.value})}
          />

          <label>your query</label>

          <textarea 
          placeholder='your query here(you can expand this box)' 
          name='query' 
          className='queries'
          onChange={(event) => setCredentials({...credentials, query: event.target.value})}
          />

          <button 
          className='querybtn' 
          onClick={addingQuery}>
            send query
          </button>
      </div>
      
    </div>
    )
  
}
