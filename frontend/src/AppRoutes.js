import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home, Login, Register, Urls, Redirector, NotFound } from './pages'
import Dashboard from './pages/Dashboard'

// All routes with animation settings.
// I took bitly.com idea, when you're logged in you see a dashboard site.
const AppRoutes = () => {

    // Location for animations (Framer-Motion).
    const location = useLocation()
    const isLoggedIn = useSelector(state => state.auth.token)

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                < Route exact path='*' element={<Redirector />} />
                < Route exact path='not-found' element={<NotFound />} />

                {!isLoggedIn && (<>
                    {/* Logged out routes */}
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                </>)}

                {/* Logged in routes. */}
                <Route exact path='/dashboard' element={!isLoggedIn ? <Navigate to='/login' /> : <Dashboard />} />
                <Route exact path='/urls' element={isLoggedIn ? <Urls /> : <Navigate to='/login' />} />

            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes;