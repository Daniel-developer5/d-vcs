import { FC, ReactNode } from 'react'

interface TabPanelProps {
  value: number,
  index: number,
  children: string | ReactNode | ReactNode[]
}

const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div className='TabPanel'>
      {value === index && children }
    </div>
  )
}

export default TabPanel
