import { FC } from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../../redux/loginSlice'

const Settings: FC = () => {
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div className='Settings'>
      <Button
        color='secondary'
        variant='outlined'
        onClick={onLogOut}
      >Log Out</Button>
    </div>
  )
}

export default Settings
