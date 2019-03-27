const router = require("express").Router();

// Knex connection
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

// Create cohort
router.post("/", async (req, res) => {
	try {
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error while creating that cohort"
		});
	}
});

module.exports = router;
