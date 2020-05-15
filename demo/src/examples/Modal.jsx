import React from 'react'
import { Modal, Button } from '../../../src'

const ModalExample = () => {
  const [visible, setVisible] = React.useState(false)

  const toggleState = () => setVisible(state => !state)

  return (
    <>
      <Button title='Open' variant='primary' onClick={toggleState} />
      {visible && (
        <Modal
          onBackDropClick={() => {}}
          onEscape={() => {}}
          animated
          backDrop='royalblue'
          alignItems='center'
          justifyContent='center'>
          <Button title='Close' variant='primary' onClick={toggleState} />
        </Modal>
      )}
    </>
  )
}

export default ModalExample
