const bookshelf = require("./bookself");

class Card extends bookshelf.Model {
  get tableName() {
    return "cards";
  }
  get hasTimestamps() {
    return true;
  }
}
module.exports = Card;
