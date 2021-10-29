# subburama-users-test
Sample test project for Subbu Rama.

This sample project was built using create-react-app, React Hooks, MUI, and a DataGrid for the client side.
The server side is an Express Node.js app with cors and very simple data structures and logic.
Both ends where containerized using Docker.io, specically docker-compose.
To run them you will need to install Docker on you machine, clone this repository and run
`docker-compose up -d` in the root directory where the yml file is.

The client is set to run on localhost:3000, and the server side on port :5000, so be mindful of having those free before you run the command.
