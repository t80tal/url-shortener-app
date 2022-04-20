import React from 'react'
import Table from '../components/UI/Table'
import BasePage from './BasePage'

const Urls = () => {
  return (
    <BasePage name="Urls">
      <Table categories={['a', 'b', 'c', 'd', 'e']} information={[1, 2, 3, 4, 5]} />
    </BasePage>
  )
}

export default Urls