import React from 'react'
import { createLinkHandler } from '../store/auth-store/user-actions'
import useInput from '../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/Urls'
import EditingModalWrapper from '../assets/wrappers/EditingModal'
import Table from '../components/UI/Table'
import { Modal } from '../components'
import BasePage from './BasePage'
import styled from 'styled-components'
import { urlValidator } from '../validators'
import { uiActions } from '../store/ui-store/ui'
import Chart from 'react-apexcharts'
import { delete_url_by_id, edit_url_by_id } from '../store/auth-store/user-actions'
import { setErrorModal } from '../store/ui-store/ui-actions'

const Urls = () => {
  const urls = useSelector(state => state.auth.user.urls)
  const urlModalId = useSelector(state => state.ui.urlModal.id)
  const inEditingMode = useSelector(state => state.ui.urlModal.editingMode)
  // console.log(inputsAlert)
  // Current selected url (if selected)
  let selectedUrl = null
  if (urlModalId) {
    selectedUrl = urls.filter(url => url._id === urlModalId)[0]
  }
  const getOptions = (url) => {
    return {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: url.views ? Object.keys(url.views).slice(0, 10) : ['']
      }
    }
  }

  const getData = (url) => {
    return [
      {
        name: "Amount of clicks",
        data: url.views ? Object.values(url.views).slice(0, 10).map(view => view.amount) : []
      }
    ]
  }

  const getAmountOfClicksByUrl = (url) => {
    if (!url || !url.views) {
      return 0
    }
    let amount = 0
    for (const [view] of Object.entries(url.views)) {
      amount = amount + url.views[view].amount
    }
    return amount
  }

  //

  // Inputs states with validators.
  const { value: urlValue, setValue: setUrlValue, inputClass: urlClass, result: urlResult } = useInput(urlValidator, 'Enter a valid url')
  const { value: editUrlValue, setValue: setEditUrlValue, inputClass: editUrlClass, result: editUrlResult } = useInput(urlValidator, 'Enter a valid url')
  //

  const dispatch = useDispatch()
  // tmp url if redirected from home
  if (localStorage.getItem('tmp-given-url')) {
    setUrlValue(localStorage.getItem('tmp-given-url'))
    localStorage.removeItem('tmp-given-url')
  }
  const addLinkHandler = () => {
    if (!urlValue || !urlValidator(urlValue)) {
      dispatch(setErrorModal(urlResult.message || 'Enter a valid url'))
      return
    }
    dispatch(createLinkHandler(urlValue))
    setUrlValue('')
  }
  const onCloseUrlModalHandler = () => {
    dispatch(uiActions.toggleUrlModal())
  }

  const onEditingModeHandler = () => {
    dispatch(uiActions.toggleUrlModalEditingMode())
  }

  const onCancelEditingModeHandler = () => {
    dispatch(uiActions.toggleUrlModal())
  }

  const onDeleteURLHandler = () => {
    dispatch(delete_url_by_id(selectedUrl._id))
  }

  const onSaveEditURLHandler = () => {
    if (!editUrlValue || !urlValidator(editUrlValue)) {
      dispatch(setErrorModal("Enter a valid url."))
      return
    }
    dispatch(edit_url_by_id(editUrlValue, selectedUrl._id))
    setEditUrlValue('')
  }

  return (
    <BasePage name="Urls">
      <Wrapper>
        <div className='row'>
          <input onChange={setUrlValue} value={urlValue} className={`link-input ${urlClass}`} placeholder='Shorten your link' />
          <button className='add-button' onClick={addLinkHandler}>
            Add a new url
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
        <div className='alert-area'>
          <div className={urlResult.type}>
            {urlResult.message}
          </div>
        </div>


        <div className='rows-table'>
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
        </div>
        {urlModalId && selectedUrl && (<Modal onClose={onCloseUrlModalHandler}>
          <EditingModalWrapper>
            <h2>Last ten ip's:</h2>
            <Chart
              options={getOptions(selectedUrl)}
              series={getData(selectedUrl)}
              type="bar"
              width="100%"
              height="30%"
            />
            <div className='flex-container'>
              <div className='information'>
                <div className='row'><h2>Original url: </h2>{!inEditingMode ? selectedUrl.longUrl : (<input className={`editing-input ${editUrlClass}`} value={editUrlValue} onChange={setEditUrlValue} placeholder={selectedUrl.longUrl} />)}</div>
                <div className='alert-area'>
                  {/* editUrlResult is a validation from frontend and inputsAlert are from backend */}
                  <div className={editUrlResult.type}>
                    {editUrlResult.message}
                  </div>
                </div>
                <div className='row'><h2>Short url: </h2>{'localhost/' + selectedUrl.urlCode}</div>
                <div className='row'><h2>Amount of clicks: </h2>{getAmountOfClicksByUrl(selectedUrl)}</div>
                <div className='row'><h2>Last time edited: </h2>{new Date(selectedUrl.updatedAt.slice(0, 10)).toDateString()}</div>
                <div className='row'><h2>Created at: </h2>{new Date(selectedUrl.createdAt.slice(0, 10)).toDateString()}</div>
              </div>
              <div className='buttons'>
                <button onClick={!inEditingMode ? onEditingModeHandler : onSaveEditURLHandler} className={!inEditingMode ? 'edit-btn' : 'save-btn'}>{!inEditingMode ? 'Edit' : 'Save'}</button>
                <button onClick={onDeleteURLHandler} className='delete-cancel-btn'>Delete</button>
                <button onClick={onCancelEditingModeHandler} className='delete-cancel-btn'>Cancel</button>
              </div>

            </div>
          </EditingModalWrapper>
        </Modal>)}
      </Wrapper>
    </BasePage>
  )
}


const SvgWrapper = styled.div`
      cursor: pointer;
  `
const Editbutton = ({ id }) => {
  const dispatch = useDispatch()

  const onOpenUrlModalHandler = () => {
    dispatch(uiActions.toggleUrlModal(id))
  }

  return (
    <SvgWrapper id={id} onClick={onOpenUrlModalHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
      </svg>
    </SvgWrapper>
  )
}

export default Urls