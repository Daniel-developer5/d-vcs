import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../..'
import LoginFields from './LoginFields'
import NextStep from './NextStep'

import './LoginForm.scss'

interface LoginFormProps {
  signIn?: boolean,
}

const LoginForm: FC<LoginFormProps> = ({ signIn }) => {
  const { nextStep } = useSelector((state: RootState) => state.login)

  return (
    <div className='LoginForm'>
      <div className='container'>
        <h2 className='title'>{ signIn ? 'Sign In' : 'Sign Up' }</h2>
        { signIn ?
          <p className='under-title'>
            You can <Link to='/sign-up'>Sign Up</Link> if you do not have an account.
          </p> :
          <p className='under-title'>
            You can <Link to='/sign-in'>Sign In</Link> if you already have an account.
          </p>
        }
        { (nextStep && !signIn) ?
          <NextStep /> :
          <LoginFields signIn={signIn} />
        }
      </div>
    </div>
  )
}

export default LoginForm
