import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'react-apexcharts'

import { getUrlsChartOptions, getUrlChartData, getAmountOfClicksByUrl } from '../../../filteringFunctions/urls'
import Wrapper from '../../../assets/wrappers/UrlModal'
import useInput from '../../../hooks/useInput'
import { urlValidator } from '../../../validators'
import Modal from './basemodal/Modal'
import { uiActions } from '../../../store/ui-store/ui'
import { delete_url_by_id, edit_url_by_id } from '../../../store/auth-store/user-actions'
import { setErrorModal } from '../../../store/ui-store/ui-actions'

const UrlModal = ({ selectedUrl }) => {
    const dispatch = useDispatch()
    const { value: editUrlValue, setValue: setEditUrlValue, inputClass: editUrlClass, result: editUrlResult } = useInput(urlValidator, 'Enter a valid url')
    const inputAlert = useSelector(state => state.ui.alert)
    const inEditingMode = useSelector(state => state.ui.urlModal.editingMode)
    // Close url modal.
    const onCloseUrlModalHandler = () => {
        dispatch(uiActions.toggleUrlModal())
    }

    // Enter editing mode in the url modal.
    const onEditingModeHandler = () => {
        dispatch(uiActions.toggleUrlModalEditingMode())
    }

    // Exit editing mode in the url modal.
    const onCancelEditingModeHandler = () => {
        dispatch(uiActions.toggleUrlModal())
    }

    // Delete url handler.
    const onDeleteURLHandler = () => {
        dispatch(delete_url_by_id(selectedUrl._id))
    }

    // On url editing handler.
    const onSaveEditURLHandler = () => {
        if (!editUrlValue || !urlValidator(editUrlValue)) {
            dispatch(setErrorModal('Enter a valid url.'))
            return
        }
        dispatch(edit_url_by_id(editUrlValue, selectedUrl._id))
        setEditUrlValue('')
    }
    return (
        <Modal onClose={onCloseUrlModalHandler}>
            <Wrapper>
                <h2>Last ten ip's:</h2>
                <Chart
                    options={getUrlsChartOptions(selectedUrl)}
                    series={getUrlChartData(selectedUrl)}
                    type='bar'
                    width='100%'
                    height='30%'
                />
                <div className='flex-container'>
                    <div className='information'>
                        <div className='row'><h2>Original url: </h2>{!inEditingMode ? selectedUrl.longUrl : (<input className={`editing-input ${editUrlClass}`} value={editUrlValue} onChange={setEditUrlValue} placeholder={selectedUrl.longUrl} />)}</div>
                        <div className='alert-area'>
                            {/* editUrlResult is a validation from frontend and inputsAlert are from backend */}
                            <div className={inputAlert.target === 'editingUrls' ? inputAlert.alertClass : editUrlResult.type}>
                                {inputAlert.target === 'editingUrls' ? inputAlert.msg : editUrlResult.message}
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
            </Wrapper>
        </Modal>
    )
}

export default UrlModal