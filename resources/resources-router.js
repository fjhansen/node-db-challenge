const express = require('express')

const Resources = require('./resources-model.js')

const router = express.Router();

router.get('/', (req, res) => {
  Resources.fetchResources()
  .then(resources => {
    res.status(201).json({ resources })
  })
  .catch(error => {
    console.error(error.message)
    res.status(500).json({
      message: 'GET request failed for resources'
    })
  })
})

router.post('/', (req, res) => {
  Resources.addResource(req.body)
  .then(ids => {
    res.status(201).json({ id: ids[0]})
  })
  .catch(error => {
    console.error(error.message)
    res.status(500).json({
      message: 'new resource could not be posted'
    })
  })
})

module.exports = router