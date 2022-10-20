const sqlite = require("sqlite"); // é o reponsavél por conectar
const sqlite3 = require("sqlite3"); // drive de conexão
const path = require("path"); // navegação de diretórios do windows pode dar problemas, path resolve pra gente os endereços

async function sqliteConnection(){
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

  return database;
}

module.exports = sqliteConnection;