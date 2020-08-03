const express = require("express");
const shortid = require("shortid");

const server = express();
server.use(express.json());

const PORT = 8000;

// prettier-ignore
let users = [
    {name: "Maryam"}, 
    {name: "Charlie"}, 
    {name: "Jennifer"}
];

let accounts = [
	{id: shortid.generate(), name: "Jane Doe"},
	{id: shortid.generate(), name: "John Smith"},
	{id: shortid.generate(), name: "Denise Dowger"},
];

server.get("/hello", (req, res) => {
	res.send("Hello");
});

//show a list of users
server.get("/users", (req, res) => {
	res.status(200).json(users);
});

//add a user
server.post("/users", (req, res) => {
	const user = req.body;

	users.push(user);

	res.status(201).json(users);
});

//make and endpoint `/accounts` that sends an array with 3 accounts, each account should have a unique `id` and a `name` property
server.get("/accounts", (req, res) => {
	res.status(200).json(accounts);
});

server.post("/accounts", (req, res) => {
	const account = req.body;
	account.id = shortid.generate();

	accounts.push(account);

	res.status(201).json(accounts);
});

server.listen(PORT, () => {
	console.log("Server listening on port ", PORT);
});
