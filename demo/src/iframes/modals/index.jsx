import React, { useState } from 'react'
import {
  Button,
  Modal,
  Card,
  Flex,
  Typography,
  EmbededAppContainer
} from '../../../../src'

export const ModalChild = () => {
  const [isOpen, setIsOpen] = useState()
  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <Card p={4} m={4}>
      <Button variant='primary' onClick={toggleModal}>
        Open modal
      </Button>
      {isOpen && (
        <Modal
          backDrop='whiteShadow'
          onBackDropClick={toggleModal}
          onEscape={toggleModal}>
          <Modal.Content onClose={toggleModal}>
            <Card p={4} width='300px'>
              <Typography variant='textLarge'>Modal content</Typography>
            </Card>
          </Modal.Content>
        </Modal>
      )}
    </Card>
  )
}

export const ModalParent = () => (
  <Flex justifyContent='space-between'>
    <Typography variant='titleSmall'>Iframe Modal Demo</Typography>
    <EmbededAppContainer
      src='index.html?demo=modals'
      defaultHeight='500px'
      useForeignModalShadow
    />
  </Flex>
)
