import { FC, useCallback, ChangeEvent } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../..'
import { setField } from '../../../redux/loginSlice'
import { logIn } from '../../../redux/asyncReducers'

import './NextStep.scss'

const NextStep: FC = () => {
  const { username, email, password } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  const onSetUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({
      field: 'username',
      value: e.target.value,
    }))
  }, [username])

  const onConfirm = useCallback(() => {
    if (username) {
      dispatch(logIn({ email, password, username, signIn: false }))
    }
  }, [username])

  return (
    <form className='NextStep'>
      <TextField
        label='Username'
        value={username}
        onChange={onSetUsername}
      />
      <div className='login-btn'>
        <Button
          variant='contained'
          color='primary'
          onClick={onConfirm}
        >
          Confirm Username
        </Button>
      </div>
    </form>
  )
}

export default NextStep
