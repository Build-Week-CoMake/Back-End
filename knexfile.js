// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://ixvihvvm:Nh-H8Fk3zW1X9bEFWMmyrBSvcOKgEWSI@salt.db.elephantsql.com:5432/ixvihvvm',
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
      ssl: true
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true
  }

};
