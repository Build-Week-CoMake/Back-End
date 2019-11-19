
exports.up = function (knex) {
    return knex.schema.createTable('issues', (table) => {
        table.increments();
        table.string('title', 255).notNullable();
        table.string('description', 255).notNullable();
        table.string('picture', 255);
        table.string('location', 255).notNullable();
        table
            .string('user_id', 255)
            .notNullable()
            .references('username')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('issues')
};
