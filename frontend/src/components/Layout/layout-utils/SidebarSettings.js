import React from 'react'
import { Modal } from '../../'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../../assets/wrappers/SettingsWrapper'
import { fullnameValidator, passwordValidator, emailValidator } from '../../../validators'
import useInput from '../../../hooks/useInput'
import { update_user } from '../../../store/auth-store/auth-actions'
import { uiActions } from '../../../store/ui-store/ui'

const SidebarSettings = ({ onClose }) => {
    const dispatch = useDispatch()
    const settingsOption = useSelector(state => state.ui.settingsModal.settingsOption)

    const { value: name, setValue: setName, inputClass: nameClass } = useInput(fullnameValidator)
    const { value: email, setValue: setEmail, inputClass: emailClass } = useInput(emailValidator)
    const { value: password, setValue: setPassword, inputClass: passwordClass } = useInput(passwordValidator)
    const { value: oldPassword, setValue: setOldPassword, inputClass: oldPasswordClass } = useInput(passwordValidator)

    const onChangeHandler = event => {
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

    const openSettingsHandler = event => {
        dispatch(uiActions.toggleSettingsModal(event.target.id))
    }
    const onCancelhandler = () => {
        dispatch(uiActions.toggleSettingsModal())
    }

    return (
        <Modal onClose={onClose}>
            <Wrapper>
                <div className='options'>
                    <h2>Settings</h2>
                    <ul>
                        <li className='options-item active'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
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

                        {/* Change name section */}
                        {settingsOption === 'name' && (<>

                            <div className='form-row '>
                                <label>Full name: </label>
                                <input value={name} onChange={setName} className={nameClass} />
                            </div>
                            <div className='form-row '>
                                <label>old password: </label>
                                <input type="password" value={oldPassword} onChange={setOldPassword} className={oldPasswordClass} />
                            </div>
                            <div className='form-row '>
                                <button name="name" onClick={onChangeHandler}>Save</button>
                                <button onClick={onCancelhandler}>cancel</button>
                            </div>
                        </>)}

                        {/* Change email section */}
                        {settingsOption === 'email' && (<>
                            <div className='form-row '>
                                <label>Email: </label>
                                <input value={email} onChange={setEmail} className={emailClass} />
                            </div>
                            <div className='form-row '>
                                <label>Old password: </label>
                                <input type="password" value={oldPassword} onChange={setOldPassword} className={oldPasswordClass} />
                            </div>
                            <div className='form-row '>
                                <button name="email" onClick={onChangeHandler}>Save</button>
                                <button onClick={onCancelhandler}>cancel</button>
                            </div>
                        </>)}

                        {/* Change password section */}
                        {settingsOption === 'password' && (<>
                            <div className='form-row '>
                                <label>Old password: </label>
                                <input type="password" value={oldPassword} onChange={setOldPassword} className={oldPasswordClass} />
                            </div>
                            <div className='form-row '>
                                <label>New password: </label>
                                <input type="password" value={password} onChange={setPassword} className={passwordClass} />
                            </div>
                            <div className='form-row '>
                                <button name="password" onClick={onChangeHandler}>Save</button>
                                <button onClick={onCancelhandler}>cancel</button>
                            </div>
                        </>)}

                    </div>
                </div>
            </Wrapper>
        </Modal>
    )
}

export default SidebarSettings