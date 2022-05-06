import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { check_url_by_code } from '../store/auth-store/user-actions'

// Loading modal while checking the url path if exists in db.
const Redirector = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    // Navigate to notfound page on error.
    const navigate = useNavigate()

    // Check url
    dispatch(check_url_by_code(location.pathname.substring(1), navigate))

    return (<></>)
}

export default Redirector