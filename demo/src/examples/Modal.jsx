import React, { useState } from 'react'

import { Modal, Button } from '../../../src'

const ModalExample = () => {
  const [visible, setVisible] = useState(false)

  const toggleState = () => setVisible(state => !state)

  return (
    <>
      <Button title='Open Modal' variant='primary' onClick={toggleState} />
      {visible && (
        <Modal
          onBackDropClick={toggleState}
          onEscape={toggleState}
          animated
          backDrop='whiteShadow'
          alignItems='center'
          justifyContent='center'>
          <Modal.Content onClose={toggleState} p={20} bg='yellowgreen'>
            <Button
              title='Close Modal'
              variant='primary'
              onClick={toggleState}
            />
          </Modal.Content>
        </Modal>
      )}
    </>
  )
}

export default ModalExample
