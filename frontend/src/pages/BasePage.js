import React from 'react'
import { animate, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

// Base page with aniamtions.
const BasePage = props => {
    // const token = useSelector(state => state.auth.token)
    // const navigate = useNavigate()
    // const pathname = useLocation().pathname

    // const loggedInRoutes = ['/dashboard', '/urls', '/campaigns']
    // console.log(loggedInRoutes.includes(pathname))
    // if (loggedInRoutes.includes(pathname) && !token) {
    //     navigate('/')
    // }

    return (
        <motion.div
            key={props.name}
            style={{ width: '100%' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2 }} >
            {props.children}

        </motion.div>
    )
}

export default BasePage;