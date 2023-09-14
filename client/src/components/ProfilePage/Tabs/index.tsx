import { FC, useCallback } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../..'
import { setActiveTab } from '../../../redux/tabsSlice'
import TabPanel from '../../TabPanel'
import Settings from './Settings'

import './Tabs.scss'

const ProfilePageTabs: FC = () => {
  const { activeTab } = useSelector((state: RootState) => state.tabs)
  const dispatch = useDispatch()
  
  const changeTab = useCallback((_, newTab: number) => {
    dispatch(setActiveTab(newTab))
  }, [ activeTab ])

  return (
    <div className='ProfilePageTabs'>
      <Tabs value={activeTab} onChange={changeTab} indicatorColor='primary'>
        <Tab label='Repositories' />
        <Tab label='Settings' />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        Repositories
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Settings />
      </TabPanel>
    </div>
  )
}

export default ProfilePageTabs
