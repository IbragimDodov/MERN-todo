import { response } from 'express'
import React, {useState, useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import Registration from '../../components/Registration/Registration'
import { AuthContext } from '../../context/AuthContext'

import './AuthPage.scss'

const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const {login} = useContext(AuthContext)

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form)
  }

  const loginHandler = async () => {
    try {
      await axios.post('/api/auth/login', {...form}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => console.log(response))
    } catch (error) {
      login(response.data.token, response.data.userId)
    }
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="auth-page">
          <Routes>
            <Route path='/login' element={<Auth changeHandler={changeHandler} loginHandler={loginHandler}/>}/>
            <Route path='/registration' element={<Registration changeHandler={changeHandler} form={form}/>}/>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AuthPage