const db = require('../data/db-config.js')

module.exports = {
  fetchResources,
  addResource
}
function fetchResources() {
  return db('resources')
}

function addResource(resource) {
  return db('resources')
  .insert(resource)
}