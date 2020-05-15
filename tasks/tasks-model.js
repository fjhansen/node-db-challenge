const db = require('../data/db-config.js')

module.exports = {
  fetchTasks,
  addTask
}

function fetchTasks() {
  return db('tasks as t')
  .join('projects as p', 't.project_id', 'p.id')
  .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project-name', 'p.description as project-description')
}

function addTask(task) {
  return db('tasks')
  .insert(task)
}