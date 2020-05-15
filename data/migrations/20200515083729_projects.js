
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", projects => {
    projects.increments();

    projects.string("name", 255).notNullable();
    projects.string("description", 255)

  })

  .createTable("resources", resources => {
    resources.increments();

    resources.string("name", 255).notNullable();
    resources.string("description", 255).notNullable();
    resources.boolean("completed").defaultTo(0)

  })

  .createTable("project_resources", projectResources => {
    projectResources.increments();
    
    projectResources
    .integer("project_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("projects")
    .onUpdate("CASCADE")
    .onDelete("RESTRICT")

    projectResources
    .integer("resource_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("resources")
    .onUpdate("CASCADE")
    .onDelete("RESTRICT")
  })

  .createTable('tasks', tasks => {
    tasks.increments();
    tasks.string("description", 255).notNullable();
    tasks.string("notes", 255);
    tasks.boolean('completed').defaultTo(0);

    tasks
    .integer('project_id')
    .notNullable()
    .references('id')
    .inTable('projects')
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("resources")
  .dropTableIfExists("project_resources")
  .dropTableIfExists("tasks")
};
