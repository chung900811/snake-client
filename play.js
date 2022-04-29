const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const setUp = connect();

setupInput(setUp);

module.exports = {setupInput};
