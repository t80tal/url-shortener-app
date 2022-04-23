import React from 'react'
import Wrapper from '../assets/wrappers/LoginRegister'
import BasePage from './BasePage'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { get_urls_by_token, login_with_credentials } from '../store/auth-store/auth-actions'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    // Dispatch redux.
    const dispatch = useDispatch()

    // Navigate to redirect when succeed.
    const navigate = useNavigate()

    // Show when there's an alert.
    const alert = useSelector(state => state.ui.alert)

    const usernameValidator = (value) => {
        if (value.length > 5) {
            return true
        } else {
            return false
        }
    }

    const passwordValidator = (value) => {
        if (value.length > 5) {
            return true
        } else {
            return false
        }
    }
    // Inputs states with validators.
    const { value: username, setValue: setUsername, inputClass: usernameClass } = useInput(usernameValidator)
    //
    const { value: password, setValue: setPassword, inputClass: passwordClass } = useInput(passwordValidator)

    // Onlogin handler.
    const loginHandler = event => {
        event.preventDefault()
        if (!password || !username) {
            // #TODO: dispatch error to ui with login key for the specific page
        } else if (!passwordValidator(password) || !usernameValidator(username)) {
            // #TODO: dispatch error to ui with login key for the specific page
        }
        dispatch(login_with_credentials(username, password, navigate))
    }

    return (
        <BasePage name="Login">
            <Wrapper>
                <div className='content'>
                    <h1>
                        EZLink
                    </h1>
                    <p>
                        Login now and create your own short links and manage them.
                    </p>
                </div>
                <form className='form' onSubmit={loginHandler}>
                    <h1>
                        Login
                    </h1>
                    <div className='alert-area'>
                        {alert.target === 'login' ? <div className={alert.alertClass}>
                            {alert.msg}
                        </div> : ''}
                    </div>
                    <div className='subcontainer-form'>
                        <svg alt="Facebook icon" xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <svg alt="Gmail icon" xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        <p>Or login by existing account.</p>
                        <input class={usernameClass} value={username} onChange={setUsername} minLength={6} name="username" placeholder="Username" required />
                        <input class={passwordClass} value={password} onChange={setPassword} minLength={6} type="password" name="password" placeholder="Password" required />
                        <Link to='../forgot-password' className='text-button'>Forgot password?</Link>
                        <Link to='../register' className='text-button'>Create a new account</Link>
                        <button type="submit" >Login</button>
                    </div>
                </form >
            </Wrapper>
        </BasePage>
    )
}

export default Login