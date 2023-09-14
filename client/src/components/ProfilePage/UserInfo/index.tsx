import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../..'

import './UserInfo.scss'

const UserInfo: FC = () => {
  const { username } = useSelector((state: RootState) => state.login)

  return (
    <div className='UserInfo'>
      <div className='avatar'></div>
      <span className='username'>{username}</span>
    </div>
  )
}

export default UserInfo
