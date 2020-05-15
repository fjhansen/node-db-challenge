const express = require('express')

const Tasks = require('./tasks-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Tasks.fetchTasks()
  .then(task => {
    res.status(200).json({task})
  })
  .catch(error => {
    console.error(error.message)
    res.status(500).json({
      message: 'could not fetch tasks'
    })
  })
})

router.post('/', (req, res) => {
  Tasks.addTask(req.body)
  .then(ids => {
    res.status(201).json({ id: ids[0]})
  })
  .catch(error => {
    console.error(error.message)
    res.status(500).json({
      errorMessage: 'new task could not be posted'
    })
  })
})

module.exports = router