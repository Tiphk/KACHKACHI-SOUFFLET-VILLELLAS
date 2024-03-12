CREATE TABLE actors (
    id serial PRIMARY KEY,
    name VARCHAR ( 20 ) UNIQUE NOT NULL,
    height INTEGER NOT NULL,
);

INSERT INTO actors (name, height) VALUES
('Dujardin', 182);
