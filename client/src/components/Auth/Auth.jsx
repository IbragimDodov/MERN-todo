import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

import './Auth.scss'


const Auth = ({changeHandler, form}) => {
  const {login} = useContext(AuthContext)
  
  const loginHandler = async () => {
    try {
      await axios.post('/api/auth/login', {...form}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => login(response.data.token, response.data.userId))
    } catch (error) {
      // console.log(response.data.token, response.data.userId)
    }
  }

  return (
    <div className='auth-page'>
      <h3>Авторизация</h3>
      <form onSubmit={e => e.preventDefault()} className='form form-login'>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={changeHandler} type="email" name='email' className='validate' />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-field col s12">
            <input onChange={changeHandler} type="password" name='password' className='validate' />
            <label htmlFor="password">Пароль:</label>
          </div>
        </div>

        <div className="row">
          <button onClick={loginHandler} className='wawes-effect wawes-light btn blue'>Войти</button>
          <Link to="/registration" className='btn-outline btn-reg'>Нет акканта?</Link>
        </div>
      </form>
    </div>
  )
}

export default Auth