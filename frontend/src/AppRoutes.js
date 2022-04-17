import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home, Login, Register, ForgotPassword, WhyUs, Tutorial } from './pages'

// All routes.
const AppRoutes = () => {
    
    // Location for Framer-Motion.
    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {/* Main */}
                <Route exact path='*' element={<div>Not Found</div>} />
                <Route exact path='/' element={<Home />} />
                <Route exact path='/why-us' element={<WhyUs />} />
                <Route exact path='/tutorial' element={<Tutorial />} />
                {/* Auth */}
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/forgot-password' element={<ForgotPassword />} />
                {/* Logged in routes */}
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes;