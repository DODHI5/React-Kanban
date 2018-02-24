const enviroment = process.env.ENVIROMENT || "development";
const config = require("../knexfile")[enviroment];
module.exports = require("knex")(config);
