exports.up = function(knex) {
	return knex.schema
		.createTable('users', (table) => {
			table.string('username', 255).notNullable().unique().primary();
			table.string('password', 255).notNullable();
			table.string('location', 255).notNullable();
		})
		.createTable('issues', (table) => {
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
		.createTable('upvotes', (table) => {
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

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users').dropTableIfExists('issues').dropTableIfExists('upvotes');
};
