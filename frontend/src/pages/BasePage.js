import React from 'react'
import { motion } from 'framer-motion'

import useTitle from '../hooks/useTitle'

// Base page with animations.
const BasePage = props => {

    // Page title
    useTitle('Url shortener | ' + props.name)

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