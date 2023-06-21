/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import './css/signup.css';
import { SignUp, GoogleSignUp } from '../api/Authapi';
import {toast} from 'react-toastify';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
export default function Signup() {
const [credentials, setCredentials] = useState({});
let navigate = useNavigate();
const register = async() => {
    try {
        let userdata = await SignUp(credentials.email, credentials.password);
        toast.success("signing up");
        localStorage.setItem('userID', userdata.userID);
        localStorage.setItem('userEmail', userdata.email);
        navigate('/home');
    } catch (error) {
        toast.error(error.message);
    }
}

const googleregister = async() => {
    let userbygoogle = GoogleSignUp();
    toast('Google SignUp is almost success');
    navigate('/home');
}

    return (
        <div className='signupdiv'>
            <h1 className='heading'>Signup</h1>

            <div className="signupform">

                <label>UserEmail</label>

                <input 
                type="email" 
                name="email" 
                className='signupemail' 
                placeholder='enter your email id'
                onChange={(event) => setCredentials({...credentials, email: event.target.value})}
                />

                <label>Password</label>

                <input 
                type="password" 
                name="password" 
                className='signuppassword' 
                placeholder='enter your password'
                onChange={(event) => setCredentials({...credentials, password: event.target.value})}
                />


                <input 
                type="submit" 
                name="submit" 
                className='signupsubmit' 
                onClick={register}
                />
               
                <div className='signupwithgoogle'>
                    <GoogleButton type='dark' onClick={googleregister}/>
                </div>

            </div>

        </div>
    )
}