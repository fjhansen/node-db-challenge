const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
  .then(projects => {
    res.status(201).json({ projects })
  })
  .catch(error => {
    console.error(error.message)
    res.status(500).json({
      message: 'GET request failed for projects'
    })
  })
})

router.post('/', (req, res) => {
  Projects.addProject(req.body)
  .then(ids => {
    res.status(201).json({ id: ids[0]})
  })
  .catch(error => {
    console.error(error.message)
    res.status(500).json({
      errorMessage: 'new project could not be posted'
    })
  })
})





module.exports = router