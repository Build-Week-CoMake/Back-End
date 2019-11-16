// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './database/dev.db'
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL + "?ssl=1"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
