const express = require('express')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth.route.js')
const todoRoute = require('./routes/todo.route.js')

// import express from 'express'
// import mongoose from 'mongoose'
// import authRoute from './routes/auth.route'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', authRoute)
app.use('/api/todo', todoRoute)

async function start() {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.cjrotun.mongodb.net/todo', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: true
    })

    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()