import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE = 'http://localhost:8080'

interface LogInParams {
  email: string,
  password: string,
  signIn?: boolean
  username?: string,
}

export const logIn = createAsyncThunk(
  'logIn',
  async (logInData: LogInParams) => {
    const res = await axios.post(`${API_BASE}/login`, logInData)

    return res.data
  }
)

export interface LogInResponse extends LogInParams {
  readonly _id: string,
}
