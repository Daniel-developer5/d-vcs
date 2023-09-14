import { FC } from 'react'
import { TailSpin } from 'react-loader-spinner'

import './Loader.scss'

const Loader: FC = () => {
  return (
    <div className='Loader'>
      <TailSpin />
    </div>
  )
}

export default Loader
