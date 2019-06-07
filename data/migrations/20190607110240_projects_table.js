exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl
        .text('description')
        .notNullable()
        .unique();
      tbl
        .boolean('completed')
        .defaultTo(false);
    })
    .createTable('actions', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl
        .text('notes')
        .notNullable()
        .unique();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects');
};
