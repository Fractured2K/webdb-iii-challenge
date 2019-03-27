const router = require("express").Router();

// Knex connection
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

// Create cohort
router.post("/", async (req, res) => {
	try {
		// Create cohort
		const cohort = await db("cohorts").insert(req.body);

		// Get newly created cohort
		const newCohort = await db("cohorts")
			.where({ id: cohort[0] })
			.first();

		// Return newly created cohort
		res.status(201).json(newCohort);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error while creating that cohort"
		});
	}
});

// Get cohort
router.get("/", async (req, res) => {
	try {
		const cohorts = await db("cohorts");

		res.status(200).json(cohorts);
	} catch (error) {
		res.status(500).json({
			message: "Sorry, but there was an error while retrieving cohorts"
		});
	}
});

// Get cohort by id
router.get("/:id", async (req, res) => {});

module.exports = router;
