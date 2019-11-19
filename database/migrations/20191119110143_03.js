
exports.up = function (knex) {
    return knex.schema.createTable('upvotes', (table) => {
        table
            .string('user_id', 255)
            .notNullable()
            .references('username')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('issue_id', 255)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('issues')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('upvotes');
};
