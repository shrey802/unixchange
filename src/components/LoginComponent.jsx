/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './css/login.css';
import { Login } from '../api/Authapi';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
export default function LoginComponent(){
    const [loginCredentials, setloginCredentials] = useState({});
    const navigate = useNavigate();
    const login = () => {
        let logindata = Login(loginCredentials.email, loginCredentials.password);
        toast('Login successful');
        navigate('/home');
    }
    return(
        <div className='login-container'>
            <h1 className='loginheading'>Login with your credentials</h1>
            <div className='loginform'>
                <label>Email</label>
                <input 
                type='email' 
                name='email'
                placeholder='enter your email address'
                className='loginemail'
                onChange={(event) => setloginCredentials({...loginCredentials, email: event.target.value})}
                />

                <label>Password</label>
                <input
                type='password'
                name='password'
                placeholder='enter your password'
                className='loginpassword'
                onChange={(event) => setloginCredentials({...loginCredentials, password: event.target.value})}
                />

                <input
                type='submit'
                name='login'
                className='loginbutton'
                onClick={login}
                />

                <div className='redirectingtosignup'>
                    new here or want to explore shit then uk 👇
                    <button onClick={() => navigate('/')} className='redirectingto'>SignUp</button>
                </div>

            </div>
        </div>
    );
}