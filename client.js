const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text

  conn.on('connect', () => {
  console.log('Successfully connected to game server');
  conn.write('Name:TH');

});
  conn.setEncoding("utf8");
  return conn;
};



module.exports = { connect }
