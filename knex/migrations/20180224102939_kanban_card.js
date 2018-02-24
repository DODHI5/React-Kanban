exports.up = function(knex, Promise) {
  return knex.schema.createTable("cards", table => {
    table.increments();
    table.string("title");
    table.string("priority");
    table.string("status");
    table.string("created_by");
    table.string("assigned_to");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cards");
};
