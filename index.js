const express = require("express");
const helmet = require("helmet");

const cohortController = require("./routes/cohorts");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cohorts", cohortController);

server.listen(5000, () => {
	console.log("Server now running on http://localhost:3001");
});
