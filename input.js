let connection;

const setupInput = (conn) =>{
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', key => handleUserInput(key));
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  else if (key === 'w') {
    connection.write("Move: up");

  }
  else if (key === 'a') {
    connection.write("Move: left")

  }
  else if (key === 's') {
    connection.write("Move: down")

  }
  else if (key === 'd') {
    connection.write("Move: right");

  }
  else if (key === 'e') {
    connection.write("go ahead");
  }
};

setupInput()

module.exports = { setupInput };
