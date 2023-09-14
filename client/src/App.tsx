import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProfilePage from './components/ProfilePage'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'
import { RootState } from '.'
import HomePage from './components/HomePage'

import './App.scss'

const App: FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login)

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={
            isLoggedIn ? <ProfilePage /> : <Navigate to='/sign-in' />
          } />
          <Route path='/sign-in' element={
            isLoggedIn ? <Navigate to='/profile' /> : <LoginForm signIn />
          } />
          <Route path='/sign-up' element={
            isLoggedIn ? <Navigate to='/profile' /> : <LoginForm />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
