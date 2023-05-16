require("dotenv").config();
console.log('evns', process.env);
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
};
