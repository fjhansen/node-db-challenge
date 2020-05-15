exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { name: 'computer', description: "a machine that is vital to complete all projects at Lambda School" },
    { name: 'training kit', description: "a wealth of information on software engineering compiled by Lambda School" },
    { name: 'node.js', description: "an open source enviornment used for developing server-side applications" },
    { name: 'knex', description: "a SQL query builder popularly paired with node.js" }
  ]);
};