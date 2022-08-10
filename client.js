const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect",() => {
    console.log("Successfully connected to game server");
  });
  
  conn.on("connect", () => {
    conn.write("Name: TH")
  })

  conn.on("connect", () => {
    setTimeout(()=>{conn.write("Move: up")}, 3000)
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = (connect);
