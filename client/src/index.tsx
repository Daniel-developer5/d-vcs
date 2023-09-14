import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import appSlice from './redux/appSlice'
import tabsSlice from './redux/tabsSlice'
import loginSlice from './redux/loginSlice'

const store = configureStore({
  reducer: combineReducers({
    app: appSlice.reducer,
    tabs: tabsSlice.reducer,
    login: loginSlice.reducer,
  })
})

export type RootState = ReturnType<typeof store.getState>

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
