const pg = require('pg');
const conString = 'postgres://postgres:felipe0025@localhost:5432/nodejsdb';
const client = new pg.Client(conString);

module.exports = client;