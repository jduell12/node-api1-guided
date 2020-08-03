const express = require("express");
const shortid = require("shortid");

const server = express();
const PORT = 8000;

server.get("/hello", (req, res) => {
	res.send("Hello");
});

//show a list of users
server.get("/users", (req, res) => {
	const users = [{name: "Maryam"}, {name: "Charlie"}, {name: "Jennifer"}];
	res.status(200).json(users);
});

//make and endpoint `/accounts` that sends an array with 3 accounts, each account should have a unique `id` and a `name` property
server.get("/accounts", (req, res) => {
	const accounts = [
		{id: shortid.generate(), name: "Jane Doe"},
		{id: shortid.generate(), name: "John Smith"},
		{id: shortid.generate(), name: "Denise Dowger"},
	];

	res.status(200).json(accounts);
});

server.listen(PORT, () => {
	console.log("Server listening on port ", PORT);
});
