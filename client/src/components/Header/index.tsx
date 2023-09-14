import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header: FC = () => {
  return (
    <div className='AppHeader'>
      <div className='container'>
        <Link to='/'>
          <h1 className='title'>dvcs</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header
