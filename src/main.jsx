/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {app, auth} from './firebaseConfig.js';

import {
  RouterProvider,
} from "react-router-dom";
import {router} from './routes/route.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    {/* Your App Components */}
    <ToastContainer />
    
  </React.StrictMode>,
  
)
