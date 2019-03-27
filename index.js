const express = require("express");
const helmet = require("helmet");

const cohortController = require("./routes/cohorts");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/", (req, res) =>
	res.status(200).json({ message: "Sanity check" })
);

server.use("/api/cohorts", cohortController);

server.listen(3001, () => {
	console.log("Server now running on http://localhost:3001");
});
