/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SignUpPage from '../pages/SignUpPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ContributePage from '../pages/ContriPage'
import AboutPage from "../pages/AboutPage";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUpPage />
    },
    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/contribute',
        element: <ContributePage/>
    },
    {
        path: '/about',
        element: <AboutPage/>
    }
])