var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which produces all the messages
    post: function (data) {

      db.query('INSERT INTO messages', req.body.text, );
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

