var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if(err) throw err;
        res.json(results);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      // var message = {username: req.body.username, text: req.body.text};
      models.messages.post([req.body.text, req.body.username], function(err) {
        if(err) throw err;
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if(err) throw err;
        res.json(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function(err) {
        if(err) throw err;
      });
    }
  }
};

