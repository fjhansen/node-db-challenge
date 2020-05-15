exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { description: 'install dependencies', notes: "reference previous projects package.json if forgetful", completed: false, project_id: 2 },
    { description: 'write scripts for nodemon', notes: "convienient but not neccessary", completed: false, project_id: 2,},
    { description: 'export seeds', notes: "creating seeds can really help you structure your database", completed: false, project_id: 2 },
    { description: 'resource requests', notes: "get, post", completed: false, project_id: 2 }
  ]);
};