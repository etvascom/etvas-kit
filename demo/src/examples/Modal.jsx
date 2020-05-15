import React from 'react'

import { Modal, Button } from '../../../src'

const ModalExample = () => {
  const [visible, setVisible] = React.useState(false)

  const toggleState = () => setVisible(state => !state)

  return (
    <>
      <Button title='Open Modal' variant='primary' onClick={toggleState} />
      {visible && (
        <Modal
          onBackDropClick={() => {}}
          onEscape={() => {}}
          animated
          backDrop='royalblue'
          alignItems='center'
          justifyContent='center'>
          <Modal.Content p={8} bg='yellowgreen'>
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
