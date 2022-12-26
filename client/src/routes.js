import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from "./components/Auth/Auth"
import Registration from "./components/Registration/Registration"
import MainPage from "./pages/MainPage/MainPage"


export const useRoutes = (isLogin) => {

    return (
      <Routes>
        <Route path='/' element={isLogin ? <MainPage/> : <Registration />}/>
        <Route path='/login' element={isLogin ? <MainPage/> : <Auth />}/>
        {/* <Route path='/' element={isLogin ? <MainPage/> : <Navigate to="/login" />}/> */}
        {/* <Route path='/login' element={isLogin ? <Auth/>} */}
      </Routes>
    
      // if (isLogin) {
      //   return (
      //     <Routes>
      //       <Route path='/' element={<MainPage/>}/>
      //       {/* <Navigate to='/'/> */}
      //       {/* <Route path='/login' element={isLogin ? <Navigate to="/" replace /> : <Auth/>}/> */}
      //     </Routes>
      //   )
      // }
    
      // return (
      //   <Routes>
      //     {/* <Route path='/login' element={<Auth/>}/> */}
      //     <Route path='/login' element={<Navigate to='/'/>}/>
          
      //   </Routes>
      // )

    )
  
}