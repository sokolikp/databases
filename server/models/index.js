var db = require('../db');

  // message_id int AUTO_INCREMENT NOT NULL,
  // time_stamp TIMESTAMP,
  // message_text varchar(160),
  // user_id int,

module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      var queryString = 'SELECT messages.time_stamp, messages.message_text, users.username \
                        FROM messages left outer join users on (messages.user_id = users.user_id)';
      db.query(queryString, function(err, data) {
        callback(data);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages (message_text, user_id) \
                            values(?, (SELECT user_id FROM users WHERE username=?) )';
      db.query(queryString, params, function(err) {
        // if(err) throw err;
        callback(err);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO users (username) values (?)';
      db.query(queryString, params, function(err) {
        // if(err) throw err;
        callback(err);
      });
    }
  }
};

