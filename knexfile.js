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
      database: "postgres://rzskmtjrdmziyo:661123658eb8bafe98dc98151eba17c9cf931e76ebec65fd4bb1339646f61e58@ec2-107-21-94-185.compute-1.amazonaws.com:5432/d8dgubsu4lsofl?ssl=1"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }

};
