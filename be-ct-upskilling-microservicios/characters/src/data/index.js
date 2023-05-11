const characters = require("./characters.json");

//This json is going to be replaced with an API later. However, the rest of the service will remain the same, as this functions mimics the actual functioning of an API.

module.exports = {
  list: async () => {
    return characters;
  },

  create: async () => {
    throw Error(
      "Hay un error en la Base de Datos al momento de crear un personaje"
    );
  },
};
