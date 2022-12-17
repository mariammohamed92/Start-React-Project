import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import Portfolio from '../Portfolio/Portfolio'
import Navbar from '../Navbar/Navbar'



export default function Master() {
return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
)
}
