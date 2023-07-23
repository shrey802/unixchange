/* eslint-disable no-unused-vars */
import React from 'react';
import NavbarComponent from '../components/common/NavbarComponent'
import HomeDataComponent from './HomeDataComponent';
export default function HomeComponent(){
    // LAYOUT FOR HOMEPAGE
    return(
        <div>
            <NavbarComponent/>
            <HomeDataComponent/>
        </div>
    )
}