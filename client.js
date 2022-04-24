const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
    
  conn.setEncoding("utf8");
  
  conn.on('connect', (connect) => {
  console.log(`Successfully connected to game server`);
  conn.write(`Name: TH`);
  conn.write("Move: up");
  });
  
  conn.on('data', (data) => {
  console.log('Server says: ', data);
  });

  return conn;
};

connect()
module.exports = { connect }
