import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from "./components/Auth/Auth"

import MainPage from "./pages/MainPage/MainPage"

export const useRoutes = (isLogin) => {

  if (isLogin) {
    return (
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Navigate to='/'/>
        {/* <Route path='/login' element={isLogin ? <Navigate to="/" replace /> : <Auth/>}/> */}
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/login' element={<Auth/>}/>
      <Navigate to='/'/>
    </Routes>
  )
  
}