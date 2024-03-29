const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect",() => {
    console.log("Successfully connected to game server");
  });
  
  conn.on("connect", () => {
    conn.write("Name: TH");
  });

  conn.on("connect", () => {
    setTimeout(()=>{
      conn.write("Move: up");
    }, 3000);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;

