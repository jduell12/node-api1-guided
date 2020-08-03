# Notes during guided project

## keep list of dependencies

- generate a package.json 'npm init -y' or 'npm init' to answer questions

## ignore node_modules folder content

- generate a .gitignore file
- npx gitignore node
- generates a .gitignore file for a node project since other projects need files
  and ignore files different from other projects. We need a specific .gitignore
  for node.

## file that runs the server - base file

- index.js main file normally
- if using different name for the file then need to change in package.json

## create a server

- use express to create server with NodeJs
- const express = require('express')
- const server = express()
- const port = 8000, creates a port number for the server to listen to
- keep port number between 5000 and 8000 to avoid conflicting with other
  processes
- listening for incoming traffic server.listen(port, () => {})

## server on different path names

- server.get('/hello', (req, res)=>{})
- get HTTP method with path name /hello and the callback function handles what's
  happens on that request from the client
- helps to test the server to make sure it's working properly

## have to restart sever after changing unless using a specific pacakge that will restart automatically

- npm i - D nodemon
- tells node that nodemon package is for development only
- need to create a script in package.json to start the application with nodemon
- in package.json in the scripts object add a script to use nodemon
- run nodemon type 'npm run server' or whatever name the script is (in this case
  server is the name of the script to run the server in this project)
-
