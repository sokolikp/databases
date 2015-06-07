CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   room_id int AUTO_INCREMENT NOT NULL,
--   room_name varchar(17),
--   -- CONSTRAINT rooms_pk
--   PRIMARY KEY (room_id)
-- );

CREATE TABLE users (
  user_id int AUTO_INCREMENT NOT NULL,
  username varchar(17) NOT NULL,
  -- room_id int,
  -- CONSTRAINT users_pk
  PRIMARY KEY (user_id)
  -- CONSTRAINT fk_rooms
  -- FOREIGN KEY (room_id) REFERENCES rooms (room_id)
);

CREATE TABLE messages (
  message_id int AUTO_INCREMENT NOT NULL,
  time_stamp TIMESTAMP,
  message_text varchar(160),
  user_id int,
  -- room_id int,
  -- CONSTRAINT messages_pk
  PRIMARY KEY (message_id),
  -- CONSTRAINT fk_users
  FOREIGN KEY (user_id) REFERENCES users (user_id)
  -- CONSTRAINT fk_rooms
  -- FOREIGN KEY (room_id) REFERENCES rooms (room_id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

