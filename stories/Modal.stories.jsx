import React, { useState } from 'react'
import { Modal, Button, PhoneNumberInputField, Card, Form, Flex } from '../src'

export default {
  title: 'Demo/Modal',
  component: Modal
}

export const Default = () => {
  const [isModalShown, setModalShown] = useState(false)

  const showModal = () => setModalShown(true)
  const hideModal = () => setModalShown(false)

  const _handleValidation = values => {
    /* eslint no-control-regex: 0 */
    const phoneRegex = /^\+[0-9]{2}-?[0-9]{6,}$/
    const _validate = value =>
      value && !phoneRegex.test(value) ? 'Invalid phone number' : false
    const _err = _validate(values.phoneNumber)
    if (_err !== false) {
      return { phoneNumber: _err }
    }
    return {}
  }

  const _handleSubmit = async (values, formActions) => {
    const { setSubmitting } = formActions
    const _w = () => new Promise(resolve => setTimeout(resolve, 500))
    setSubmitting(true)
    // eslint-disable-next-line no-console
    console.info('SUBBITT', values)
    await _w()
    setSubmitting(false)
  }

  return (
    <Card p={6}>
      <Button variant='primary' onClick={showModal}>
        Show modal
      </Button>
      {isModalShown && (
        <Modal
          animated
          backDrop='whiteShadow'
          onEscape={hideModal}
          onBackDropClick={hideModal}>
          <Modal.Content onClose={hideModal} width={['90%', '400px']}>
            <Form
              name='user-create'
              validate={_handleValidation}
              onSubmit={_handleSubmit}
              initialValues={{ phoneNumber: '+49' }}>
              {({ isSubmitting, touched, errors }) => (
                <Card p={6}>
                  <PhoneNumberInputField
                    id='phoneNumber'
                    name='phoneNumber'
                    type='tel'
                    placeholder='Phone number'
                    label='Phone number'
                    required={true}
                    error={errors.phoneNumber}
                    valid={touched.phoneNumber && !errors?.phoneNumber}
                    tinted
                  />
                  <Flex mt={6}>
                    <Button
                      type='submit'
                      variant='primary'
                      disabled={isSubmitting}
                      loading={isSubmitting}>
                      Save
                    </Button>
                  </Flex>
                </Card>
              )}
            </Form>
          </Modal.Content>
        </Modal>
      )}
    </Card>
  )
}

export const BigModal = () => {
  const [isModalShown, setModalShown] = useState(false)

  const showModal = () => setModalShown(true)
  const hideModal = () => setModalShown(false)

  return (
    <Card p={6}>
      <Button variant='primary' onClick={showModal}>
        Show big modal
      </Button>
      {isModalShown && (
        <Modal
          animated
          backDrop='whiteShadow'
          onBackDropClick={hideModal}
          onEscape={hideModal}>
          <Modal.Content width='400px'>
            <Card p={6}>
              TITLE
              <br />
              {Array.from({ length: 40 }).map(i => (
                <>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, explicabo.
                </>
              ))}
              <Flex mt={6}>
                <Button type='submit' variant='primary'>
                  Save
                </Button>
              </Flex>
            </Card>
          </Modal.Content>
        </Modal>
      )}
    </Card>
  )
}
