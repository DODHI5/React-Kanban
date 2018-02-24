// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "kanban_user",
      password: "password",
      database: "kanban",
      charset: "utf8"
    },
    migrations: {
      directory: path.join(__dirname + "/knex/migrations")
    },
    seeds: {
      directory: path.join(__dirname + "/knex/seeds")
    },
    debug: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
