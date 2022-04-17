import React from 'react'
import { animate, motion } from 'framer-motion'

// Base page with aniamtions.
const BasePage = props => {
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