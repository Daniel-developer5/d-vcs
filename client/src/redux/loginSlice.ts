import { createSlice } from '@reduxjs/toolkit'
import { logIn, LogInResponse } from './asyncReducers'

interface LoginSliceState {
  email: string,
  username: string,
  password: string,
  nextStep: boolean,
  isLoggedIn: boolean,
}

const initialState: LoginSliceState = {
  email: '',
  username: '',
  password: '',
  nextStep: false,
  isLoggedIn: Boolean(window.localStorage.getItem('token')),
}

type LoginField = 'email' | 'username' | 'password'

interface SetFieldPayload {
  payload: {
    field: LoginField,
    value: string,
  },
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setField: (state, { payload }: SetFieldPayload) => {
      state[payload.field] = payload.value
    },
    setNextStep: (state, { payload }: { payload: boolean }) => {
      state.nextStep = payload
    },
    logOut: state => {
      state.isLoggedIn = false
      window.localStorage.removeItem('token')
    },
  },
  extraReducers: builder => {
    builder.addCase(logIn.fulfilled, (state, { payload }: { payload: LogInResponse }) => {
      state.email = payload.email
      state.isLoggedIn = true

      if (payload.username) {
        state.username = payload.username
      }

      window.localStorage.setItem('token', payload._id)
    })
  },
})

export const { setField, setNextStep, logOut } = loginSlice.actions

export default loginSlice
