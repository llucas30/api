const path = require("path");

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    }, 
    pool: {
      // habilita o funcionamento do delete em cascata das tabelas
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }, 
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    }, 
    useNullAsDefault: true
  }
};
