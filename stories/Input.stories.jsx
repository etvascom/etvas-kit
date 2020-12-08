import React from 'react'
import { Input, Typography } from '../src'

export default {
  title: 'Demo/Input',
  component: Input
}

export const Default = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default:
    </Typography>
    <Input id='id' />
    <Typography variant='h4' mt={3}>
      Input in warning state:
    </Typography>
    <Input id='id' warning />
    <Typography variant='h4' mt={3}>
      Input in error state:
    </Typography>
    <Input id='id' error />
    <Typography variant='h4' mt={3}>
      Input in valid state:
    </Typography>
    <Input id='id' valid />
  </>
)

export const Placeholder = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default with placeholder:
    </Typography>
    <Input id='id' placeholder='This is a placeholder' />
    <Typography variant='h4' mt={3}>
      Input in warning state with placeholder:
    </Typography>
    <Input
      id='id'
      placeholder='This is a placeholder'
      warning='This is a warning'
    />
    <Typography variant='h4' mt={3}>
      Input in error state with placeholder:
    </Typography>
    <Input
      id='id'
      placeholder='This is a placeholder'
      error='This is an error'
    />
    <Typography variant='h4' mt={3}>
      Input in valid state with placeholder:
    </Typography>
    <Input id='id' placeholder='This is a placeholder' valid />
  </>
)

export const SubLabel = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default with sub label:
    </Typography>
    <Input id='id' subLabel='This is a sub label' />
    <Typography variant='h4' mt={3}>
      Input in warning state with sub label:
    </Typography>
    <Input id='id' subLabel='This is a sub label' warning='This is a warning' />
    <Typography variant='h4' mt={3}>
      Input in error state with sub label:
    </Typography>
    <Input id='id' subLabel='This is a sub label' error='This is an error' />
    <Typography variant='h4' mt={3}>
      Input in valid state with sub label:
    </Typography>
    <Input id='id' subLabel='This is a sub label' valid />
  </>
)

export const Content = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default with value:
    </Typography>
    <Input id='id' value='This is some input' />
    <Typography variant='h4' mt={3}>
      Input in warning state with value:
    </Typography>
    <Input id='id' value='This is some input' warning='This is a warning' />
    <Typography variant='h4' mt={3}>
      Input in error state with value:
    </Typography>
    <Input id='id' value='This is some input' error='This is an error' />
    <Typography variant='h4' mt={3}>
      Input in valid state with value:
    </Typography>
    <Input id='id' value='This is some input' valid />
  </>
)

export const Disabled = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default with disabled attribute:
    </Typography>
    <Input id='id' disabled />
    <Typography variant='h4' mt={3}>
      Input in warning state with disabled attribute:
    </Typography>
    <Input id='id2' disabled warning='This is a warning' />
    <Typography variant='h4' mt={3}>
      Input in error state with disabled attribute:
    </Typography>
    <Input id='id3' disabled error='This is an error' />
    <Typography variant='h4' mt={3}>
      Input in valid state with disabled attribute:
    </Typography>
    <Input id='id4' disabled valid />
  </>
)

export const ContentDisabled = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default with disabled attribute and value:
    </Typography>
    <Input id='id' value='This is some input' disabled />
    <Typography variant='h4' mt={3}>
      Input in warning state with disabled attribute and value:
    </Typography>
    <Input
      id='id2'
      value='This is some input'
      disabled
      warning='This is a warning'
    />
    <Typography variant='h4' mt={3}>
      Input in error state with disabled attribute and value:
    </Typography>
    <Input
      id='id3'
      value='This is some input'
      disabled
      error='This is an error'
    />
    <Typography variant='h4' mt={3}>
      Input in valid state with disabled attribute and value:
    </Typography>
    <Input id='id4' value='This is some input' disabled valid />
  </>
)

export const Loading = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input default with loading:
    </Typography>
    <Input id='id' loading />
    <Typography variant='h4' mt={3}>
      Input default with loading and value:
    </Typography>
    <Input id='id' loading value='This  is some input' />
    <Typography variant='h4' mt={3}>
      Input default with loading and placeholder:
    </Typography>
    <Input id='id' loading placeholder='This is a placeholder' />
    <Typography variant='h4' mt={3}>
      Input default with loading and sub label:
    </Typography>
    <Input id='id' loading subLabel='This is a sub label' />
    <Typography variant='h4' mt={3}>
      Input in error state with loading:
    </Typography>
    <Input id='id' loading error />
  </>
)

export const Types = () => (
  <>
    <Typography variant='h4' mt={3}>
      Input type button:
    </Typography>
    <Input id='id' type='button' />
    <Typography variant='h4' mt={3}>
      Input type checkbox:
    </Typography>
    <Input id='id' type='checkbox' />
    <Typography variant='h4' mt={3}>
      Input type color:
    </Typography>
    <Input id='id' type='color' />
    <Typography variant='h4' mt={3}>
      Input type date:
    </Typography>
    <Input id='id' type='date' />
    <Typography variant='h4' mt={3}>
      Input type datetime-local:
    </Typography>
    <Input id='id' type='datetime-local' />
    <Typography variant='h4' mt={3}>
      Input type email:
    </Typography>
    <Input id='id' type='email' />
    <Typography variant='h4' mt={3}>
      Input type hidden:
    </Typography>
    <Input id='id' type='hidden' />
    <Typography variant='h4' mt={3}>
      Input type image:
    </Typography>
    <Input id='id' type='image' />
    <Typography variant='h4' mt={3}>
      Input type month:
    </Typography>
    <Input id='id' type='month' />
    <Typography variant='h4' mt={3}>
      Input type number:
    </Typography>
    <Input id='id' type='number' />
    <Typography variant='h4' mt={3}>
      Input type password:
    </Typography>
    <Input id='id' type='password' />
    <Typography variant='h4' mt={3}>
      Input type radio:
    </Typography>
    <Input id='id' type='radio' />
    <Typography variant='h4' mt={3}>
      Input type range:
    </Typography>
    <Input id='id' type='range' />
    <Typography variant='h4' mt={3}>
      Input type reset:
    </Typography>
    <Input id='id' type='reset' />
    <Typography variant='h4' mt={3}>
      Input type search:
    </Typography>
    <Input id='id' type='search' />
    <Typography variant='h4' mt={3}>
      Input type submit:
    </Typography>
    <Input id='id' type='submit' />
    <Typography variant='h4' mt={3}>
      Input type tel:
    </Typography>
    <Input id='id' type='tel' />
    <Typography variant='h4' mt={3}>
      Input type text:
    </Typography>
    <Input id='id' type='text' />
    <Typography variant='h4' mt={3}>
      Input type time:
    </Typography>
    <Input id='id' type='time' />
    <Typography variant='h4' mt={3}>
      Input type url:
    </Typography>
    <Input id='id' type='url' />
    <Typography variant='h4' mt={3}>
      Input type week:
    </Typography>
    <Input id='id' type='week' />
  </>
)
