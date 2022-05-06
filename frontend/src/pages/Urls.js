import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createLinkHandler } from '../store/auth-store/user-actions'
import { setErrorModal } from '../store/ui-store/ui-actions'
import useInput from '../hooks/useInput'
import Wrapper from '../assets/wrappers/Urls'
import { EditBtn, CopyBtn, UrlModal, AlertArea, Table } from '../components/'
import BasePage from './BasePage'
import { urlValidator } from '../validators'
import { useNavigate } from 'react-router-dom'

const Urls = () => {
  const dispatch = useDispatch()

  // A case that your JWT token is expired then you'll be redirected to login page.
  const naviagate = useNavigate()
  // Get all urls and then insert them into a table component.
  const urls = useSelector(state => state.auth.user.urls)

  // When you opened the url modal with a specific id, you'll get the current url information 
  // by filtering it from the urls state.
  const urlModalId = useSelector(state => state.ui.urlModal.id)
  let selectedUrl = null
  if (urlModalId) {
    selectedUrl = urls.filter(url => url._id === urlModalId)[0]
  }


  // Inputs states with validators.
  const { value: urlValue, setValue: setUrlValue, inputClass: urlClass, result: urlResult } = useInput(urlValidator, 'Enter a valid url')


  // Get the temporary url the you've entered in the home page before redirection to the login if exists.
  if (localStorage.getItem('tmp-given-url')) {
    setUrlValue(localStorage.getItem('tmp-given-url'))
    localStorage.removeItem('tmp-given-url')
  }

  // Add new url handler
  const addLinkHandler = () => {
    if (!urlValue || !urlValidator(urlValue)) {
      dispatch(setErrorModal(urlResult.message || 'Enter a valid url'))
      return
    }
    dispatch(createLinkHandler(urlValue, naviagate))
    setUrlValue('')
  }



  return (
    <BasePage name='Urls'>
      <Wrapper>
        <div className='row'>
          <input onChange={setUrlValue} value={urlValue} className={`link-input ${urlClass}`} placeholder='Shorten your link' />
          <button className='add-button' onClick={addLinkHandler}>
            Add a new url
            <svg alt='Plus button to describe the url creation button' xmlns='http://www.w3.org/2000/svg' width='35' height='35' fill='currentColor' viewBox='0 0 16 16'>
              <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
            </svg>
          </button>
        </div>
        <div className='alert-area'>
          <AlertArea type='urls' inputResult={urlResult} />
        </div>
        {/* URL's table */}
        <div className='rows-table'>
          <Table categories={['No.', 'Code', 'Original Link', 'Short Link', 'Copy', 'Date created', 'Last Time Updated', '']} information={Array.isArray(urls) ? urls.map((url, index) => {
            const url_short_link = window.location.origin + '/' + url.urlCode
            return [
              index + 1,
              url.urlCode,
              url.longUrl,
              url_short_link,
              <CopyBtn code={url_short_link} />,
              url.createdAt,
              url.updatedAt,
              <EditBtn id={url._id} />
            ]
          }) : []} />
        </div>
        {/* URL modal with its advanced information */}
        {urlModalId && selectedUrl && <UrlModal selectedUrl={selectedUrl} />}
      </Wrapper>
    </BasePage >
  )
}

export default Urls