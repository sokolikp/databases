var models = require('../models');
var bluebird = require('bluebird');


var messageID = 0;
var roomID = 0;

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var rooms = {room_id: roomID, room_name: req.body.roomname};
      var message = {message_id: messageID, message_text: req.body.text, user_id: };
      models.messages.post(message);
      console.log(req.body);
      id++;
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

