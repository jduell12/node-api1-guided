const express = require("express");

const server = express();
const PORT = 8000;

server.get("/hello", (req, res) => {
	res.send("Hello");
});

server.listen(PORT, () => {
	console.log("Server listening on port ", PORT);
});
