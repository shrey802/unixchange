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
import ContactPage from "../pages/ContactPage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from '../pages/ProductPage'
import AddProdPage from '../pages/AddProdPage'
import MyProductsPage from '../pages/MyProductsPage'
import EditFormPage from '../pages/EditFormPage'
import IndividualProductPage from '../pages/IndividualPage'
import CartPage from "../components/common/CartComponent";
import FaqPage from "../pages/FaqPage";
import SellerPage from "../pages/SellerPage";
// has all the routes for every page
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
    },
    {
        path: '/contact',
        element: <ContactPage/>
    },
    {
        path: '/profile',
        element: <ProfilePage/>
    },
    {
        path: '/products',
        element: <ProductPage/>
    },
    {
        path: '/addyourproduct',
        element: <AddProdPage/>
    },
    {
        path: '/myproducts',
        element: <MyProductsPage/>
    },
    {
        path: '/editproduct',
        element: <EditFormPage/>
    },
    {
        path: '/products/:productID',
        element: <IndividualProductPage/>
    },
    {
        path: '/mycart',
        element: <CartPage/>
    },
    {
        path: '/faqs',
        element: <FaqPage/>
    },
    {
        path: '/seller',
        element: <SellerPage/>
    }
]);