import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import Registration from '../../components/Registration/Registration'

import './AuthPage.scss'

const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form)
  }

  

  return (
    <React.Fragment>
      <div className="container">
        <div className="auth-page">
          <Routes>
            <Route path='/login' element={<Auth changeHandler={changeHandler} form={form}/>}/>
            <Route path='/registration' element={<Registration changeHandler={changeHandler} form={form}/>}/>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AuthPage