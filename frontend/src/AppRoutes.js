import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home, Login, Register, ForgotPassword, WhyUs, Tutorial, Urls } from './pages'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'

// All routes.
const AppRoutes = () => {

    // Location for Framer-Motion.
    const location = useLocation()
    const isLoggedIn = useSelector(state => state.auth.token)

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {/* Logged out routes (like Bitly)*/}
                < Route exact path='*' element={<div>Not Found</div>} />
                {!isLoggedIn &&
                    (<>
                        {/* Main */}
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/why-us' element={<WhyUs />} />
                        <Route exact path='/tutorial' element={<Tutorial />} />
                        {/* Authentication routes */}
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/register' element={<Register />} />
                        <Route exact path='/forgot-password' element={<ForgotPassword />} />
                    </>)
                }
                {/* Logged-in routes */}
                <Route exact path='/dashboard' element={!isLoggedIn ? <Navigate to='/login' /> : <Dashboard />} />
                <Route exact path='/urls' element={isLoggedIn ? <Urls /> : <Navigate to='/login' />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes;