const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.cjrotun.mongodb.net/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })

    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()