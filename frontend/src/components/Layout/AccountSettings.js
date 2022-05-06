import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '../UI/modals/basemodal/Modal'
import Wrapper from '../../assets/wrappers/AccountSettings'
import { AlertArea } from '../'
import { fullnameValidator, passwordValidator, emailValidator } from '../../validators'
import useInput from '../../hooks/useInput'
import { update_user } from '../../store/auth-store/auth-actions'
import { uiActions } from '../../store/ui-store/ui'

// Settings modal.
const AccountSettings = () => {

    const dispatch = useDispatch()
    // Settings modal has 3 options (Change email, password and name), you can get the current one from this state.
    const settingsOption = useSelector(state => state.ui.settingsModal.settingsOption)

    // Inputs validation
    const { value: name, setValue: setName, inputClass: nameClass, result: nameResult } = useInput(fullnameValidator, 'Enter a valid name.')
    const { value: email, setValue: setEmail, inputClass: emailClass, result: emailResult } = useInput(emailValidator, 'Enter a valid email.')
    const { value: password, setValue: setPassword, inputClass: passwordClass, result: passwordResult } = useInput(passwordValidator, 'Enter a valid password.')
    const { value: oldPassword, setValue: setOldPassword, inputClass: oldPasswordClass } = useInput(passwordValidator)

    // Navigating (inside the modal navbar) function.
    const openSettingsHandler = event => {
        dispatch(uiActions.toggleSettingsModal(event.target.id))
    }

    // Close settings function.
    const onCancelhandler = () => {
        dispatch(uiActions.toggleSettingsModal())
    }

    // When user submit and want to update information.
    const submitSettingsHandler = event => {
        const type = event.target.name
        switch (type) {
            case 'name':
                dispatch(update_user(type, oldPassword, name))
                break;
            case 'email':
                dispatch(update_user(type, oldPassword, email))
                break;
            case 'password':
                dispatch(update_user(type, oldPassword, password))
                break;
        }
    }


    return (
        <Modal onClose={onCancelhandler}>
            <Wrapper>
                <div className='options'>
                    <h2>Settings</h2>
                    {/* Mini sidebar */}
                    <ul>
                        <li className='options-item active'>
                            <div>
                                <svg alt="Person icon to describe account settings button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <p>Account</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='cluster'>
                    <h2>Account settings</h2>
                    <p>Settings about your own account</p>
                    <div className='cluster-form'>
                        {/* Mini navbar */}
                        <div className='navbar'>
                            <div className='menu'>
                                <div id='name' onClick={openSettingsHandler} className={`option ${settingsOption === 'name' && 'option-active'}`}>
                                    Change full name
                                </div>
                                <div id='password' onClick={openSettingsHandler} className={`option ${settingsOption === 'password' && 'option-active'}`}>
                                    Change password
                                </div>
                                <div id='email' onClick={openSettingsHandler} className={`option ${settingsOption === 'email' && 'option-active'}`}>
                                    Change email
                                </div>
                            </div>
                        </div>
                        {/* Change accout information settings */}
                        <div className='form-row '>
                            {
                                settingsOption === 'name' ?
                                    (<>
                                        <input value={name} onChange={setName} className={nameClass} placeholder='New name' />
                                        <div className='alert'>
                                            <AlertArea type='settings' inputResult={nameResult} />
                                        </div>
                                    </>) : settingsOption === 'email' ?
                                        (<>
                                            <input value={email} onChange={setEmail} className={emailClass} placeholder='New email' />
                                            <div className='alert'>
                                                <AlertArea type='settings' inputResult={emailResult} />
                                            </div>
                                        </>) :
                                        (<>
                                            <input type="password" value={password} onChange={setPassword} className={passwordClass} placeholder='New password' />
                                            <div className='alert'>
                                                <AlertArea type='settings' inputResult={passwordResult} />
                                            </div>
                                        </>)}
                        </div>
                        <div className='form-row '>
                            <input type="password" placeholder='Old password' value={oldPassword} onChange={setOldPassword} className={oldPasswordClass} />
                        </div>
                        <div className='form-row '>
                            <button name={settingsOption} onClick={submitSettingsHandler}>Save</button>
                            <button onClick={onCancelhandler}>cancel</button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Modal >
    )
}

export default AccountSettings