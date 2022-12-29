import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Registration = ({changeHandler, form}) => {

  const history = useHistory()

  const registerHandler = async () => {
    try {
      await axios.post('/api/auth/registration', {...form}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h3>Регистрация</h3>
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
          <button onClick={registerHandler} className='wawes-effect wawes-light btn blue'>Регистрация</button>
          <Link to="/login" className='btn-outline btn-reg'>Уже есть аккант?</Link>
        </div>
      </form>
    </>
  )
}

export default Registration