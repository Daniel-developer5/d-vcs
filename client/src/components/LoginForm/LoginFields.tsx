import { ChangeEvent, FC, useCallback } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../..'
import { setField, setNextStep } from '../../redux/loginSlice'
import { logIn } from '../../redux/asyncReducers'

interface LoginFieldsProps {
  signIn?: boolean,
}

const LoginFields: FC<LoginFieldsProps> = ({ signIn }) => {
  const { email, password } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  const onSetEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ field: 'email', value: e.target.value }))
  }, [email])

  const onSetPass = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ field: 'password', value: e.target.value }))
  }, [email])

  const onLogIn = useCallback(e => {
    e.preventDefault()
    
    if (!signIn && email && password) {
      dispatch(setNextStep(true))
      return
    }

    if (email && password) {
      dispatch(logIn({ email, password, signIn }))
    }
  }, [ email, password, signIn ])

  return (
    <form className='login-fields' onSubmit={onLogIn}>
      <div className='email'>
        <TextField
          label='Email'
          variant='filled'
          value={email}
          onChange={onSetEmail}
        />
      </div>
      <div className='password'>
        <TextField
          label='Password'
          variant='filled'
          type='password'
          value={password}
          onChange={onSetPass}
        />
      </div>
      <Button
        variant='contained'
        color='primary'
        type='submit'
      >{signIn ? 'Sign In' : 'Sign Up'}</Button>
    </form>
  )
}

export default LoginFields
