CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR ( 20 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) NOT NULL,
    height INTEGER NOT NULL,
);

INSERT INTO users (username, password, height) VALUES
('admin', 'admin', 180),
('user1', 'password', 170),
('user2', 'anotherpassword', 160),
('user3', 'password', 150);
