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
router.get("/", async (req, res) => {});

module.exports = router;
