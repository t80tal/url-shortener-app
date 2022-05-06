import React from 'react'
import loadingGif from '../../../assets/images/loading.gif'
import Modal from './basemodal/Modal'

// Custom styles for the loading modal.
const loadingModalStyles = {
  top: 'calc(50% - 200px)',
  width: '400px',
  left: 'calc(50% - 200px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  background: 'inherit',
  boxShadow: 'none'
}

// Loading modal.
const LoadingModal = () => {
  return (
    <Modal modalStyles={loadingModalStyles}>
      <img style={{ borderRadius: '40px' }} src={loadingGif} alt="loading gif by loading.io" />
    </Modal>
  )
}

export default LoadingModal