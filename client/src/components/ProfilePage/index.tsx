import { FC } from 'react'
import UserInfo from './UserInfo'
import Tabs from './Tabs'

import './ProfilePage.scss'

const ProfilePage: FC = () => {
  return (
    <div className='ProfilePage'>
      <div className='container'>
        <UserInfo />
        <Tabs />
      </div>
    </div>
  )
}

export default ProfilePage
