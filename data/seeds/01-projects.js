
exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { name: 'node-api-challenge', description: "project to demonstrate mastery of nodejs api creation" },
    { name: 'node-db-challenge', description: "project to demonstrate mastery of nodejs data persistence" },
    { name: 'node-auth-challenge', description: "project to demonstrate mastery of nodejs authentication and testing" }
  ]);
};