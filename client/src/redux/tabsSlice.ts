import { createSlice } from '@reduxjs/toolkit'

interface TabsSliceState {
  activeTab: number,
}

const initialState: TabsSliceState = {
  activeTab: 0,
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: { payload: number }) => {
      state.activeTab = payload
    },
  },
})

export const { setActiveTab } = tabsSlice.actions

export default tabsSlice
