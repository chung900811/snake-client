const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf8");
  conn.on('connect', (connect) => {
  console.log(`Successfully connected to game server`);
  conn.write(`Name: TH`);
 
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect }
