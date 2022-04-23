import React from 'react'
import { createLinkHandler } from '../store/auth-store/user-actions'
import useInput from '../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/Urls'
import Table from '../components/UI/Table'
import BasePage from './BasePage'
import styled from 'styled-components'

const Urls = () => {
  const urls = useSelector(state => state.auth.user.urls)
  const alert = useSelector(state => state.ui.alert)
  const urlValidator = (value) => {
    if (value.length > 3) {
      return true
    } else {
      return false
    }
  }
  // Inputs states with validators.
  const { value: urlValue, setValue: setUrlValue, inputClass: urlClass } = useInput(urlValidator)
  //

  const dispatch = useDispatch()

  const addLinkHandler = () => {
    if (!urlValue) {
      alert('Enter a valid url1')
      return
    }
    if (!urlValidator(urlValue)) {
      alert('Enter a valid url2')
      return
    }
    dispatch(createLinkHandler(urlValue))
    setUrlValue('')
  }


  return (
    <BasePage name="Urls">
      <Wrapper>
        <div className='row'>
          <input onChange={setUrlValue} value={urlValue} className={`search-input ${urlClass}`} placeholder='Shorten your link' />
          <button className='add-button' onClick={addLinkHandler}>
            Add a new url
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
        <div className='alert-area'>
          {alert.target === 'dashboard' ? <div className={alert.alertClass}>
            {alert.msg}
          </div> : ''}
        </div>
        <Table categories={['', 'Code', 'Original Link', 'Short Link', 'Date created', 'Last Time Updated', '']} information={Array.isArray(urls) ? urls.map((url, index) => {
          return [
            index + 1,
            url.urlCode,
            url.longUrl,
            'localhost/' + url.urlCode,
            url.createdAt,
            url.updatedAt,
            <Editbutton id={url._id} />
          ]
        }) : []} />
      </Wrapper>
    </BasePage>
  )
}

const Editbutton = id => {
  const Wrapper = styled.div`
      cursor: pointer;
  `
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
      </svg>
    </Wrapper>
  )
}

export default Urls