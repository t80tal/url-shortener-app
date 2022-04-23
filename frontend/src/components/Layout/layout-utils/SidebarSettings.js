import React from 'react'
import Modal from '../../UI/Modal'
import styled from 'styled-components'
import { authActions } from '../../../store/auth-store/auth'
import { useDispatch, useSelector } from 'react-redux'

const SettingsWrapper = styled.div`
    display: flex;
    height: 100%;
    border-radius: 4px;

    div {
        border-radius: 4px;
        padding: 1rem 0;
        text-align: center;
    }

    .options {
        background-color: #f2f2f2;
        flex: 1;
        box-shadow: rgba(158, 167, 175, 0.3) 0px 7px 23px;
    }

    .options ul {
        padding: 2rem 0;
        list-style: none;
    }

    .cluster {
        flex: 3;
    }

    .cluster p {
        color: lightgray;
    }

    .cluster-form {
        margin-top: 2rem;
    }

    .form-row input {
        outline: none;
        font-size: 18px;
        padding: 0 1rem;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #d8d8d8;
        box-shadow: rgba(158, 167, 175, 0.25) 0px 7px 23px;
        padding: 0.1rem 1rem;
    }

    .form-row button {
        cursor: pointer;
        margin: 0 2rem;
        padding: 0.6rem 1rem;
        outline: none;
        border: 4px;
        font-weight: bold;
        transition: all ease .3s;
    }

    .form-row button:hover {
        transform: scale(1.05);
    }

    .form-row label {
        font-size: 20px;
        font-weight: 600;
        margin-right: 1rem;
    }

    .options-item:hover {
        background-color: #d8d8d8;
    }

    .options-item div {
        width: 100px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .active {
        background-color: #e2e2e2;
    }

`

const SidebarSettings = ({ onClose }) => {
    const username = useSelector(state => state.auth.user.username)
    const dispatch = useDispatch()
    if (!username) {
        dispatch(authActions.logoutHandler())
    }
    return (
        <Modal onClose={onClose}>
            <SettingsWrapper>
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
                        <div className='form-row '>
                            <label>Username: {username}</label>
                        </div>
                        <div className='form-row '>
                            <label>Email: </label>
                            <input />
                            <button>Change</button>
                        </div>
                        <div className='form-row '>
                            <label>Password: </label>
                            <input />
                            <button>Change</button>
                        </div>
                        <div className='form-row '>

                        </div>
                    </div>
                </div>
            </SettingsWrapper>
        </Modal>
    )
}

export default SidebarSettings