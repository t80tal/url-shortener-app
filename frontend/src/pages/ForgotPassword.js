import React from 'react'
import Wrapper from '../assets/wrappers/LoginRegister'
import BasePage from './BasePage'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { useSelector } from 'react-redux'

const ForgotPassword = () => {
    const alert = useSelector(state => state.ui.alert)
    // Username input
    const { value: username, setValue: setUsername, inputClass: usernameClass } = useInput((value) => {
        if (value.length > 5) {
            return true
        } else {
            return false
        }
    })

    // Email input
    const { value: email, setValue: setEmail, inputClass: emailClass } = useInput((value) => {
        if ((value.length > 3) && (value.includes('@')) && (value.includes('.'))) {
            return true
        } else {
            return false
        }
    })
    const forgotPasswordHandler = event => {
        event.preventDefault()
        if (!email && !username) {
            // #TODO: dispatch error to ui with login key for the specific page
        } else if ((emailClass === 'invalid-input') || (usernameClass === 'invalid-input')) {
            // #TODO: dispatch error to ui with login key for the specific page
        }
        // dispatch(forgotpassword(email ? email : username))
    }


    return (
        <BasePage name="ForgotPassword">
            <Wrapper>
                <div className='content'>
                    <h1>
                        EZLink
                    </h1>
                    <p>
                        Enter you information in order to verify yourself.
                    </p>
                </div>
                <form className='form' onSubmit={forgotPasswordHandler}>
                    <h1>
                        Forgot password
                    </h1>
                    <div className='alert-area'>
                        {alert.target === 'forgotPassword' ? <div className={alert.alertClass}>
                            {alert.msg}
                        </div> : ''}
                    </div>
                    <div className='subcontainer-form'>
                        <input value={username} class={usernameClass} onChange={setUsername} minLength={6} name="username" placeholder="Username" />
                        <h3>Or</h3>
                        <input minLength={4} value={email} class={emailClass} onChange={setEmail} type="email" name="email" placeholder="email" />
                        <Link to='../login' className='text-button'>Login instead</Link>
                        <Link to='../register' className='text-button'>Create a new account</Link>
                        <button type="submit" >Reset password</button>
                    </div>
                </form >
            </Wrapper>
        </BasePage>
    )
}

export default ForgotPassword