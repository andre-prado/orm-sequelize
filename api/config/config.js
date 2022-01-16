require("dotenv").config();

module.exports = {
  development: {
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: "mysql",
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "mysql",
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "mysql",
  },
};
