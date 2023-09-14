import { createSlice } from '@reduxjs/toolkit'

interface AppSliceState {
  loading: boolean,
}

const initialState: AppSliceState = {
  loading: true,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export default appSlice
