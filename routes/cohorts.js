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

// Get all cohorts
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
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const cohort = await db("cohorts")
			.first()
			.where({ id });

		if (!cohort)
			return res
				.status(404)
				.json({ message: "Sorry, but that cohort doesn't exist" });

		res.status(200).json(cohort);
	} catch (err) {
		res.status(500).json({
			message:
				"Sorry, but there was an error while retrieving that cohort"
		});
	}
});

// Get cohort students
router.get("/:id/students", async (req, res) => {
	try {
		const { id } = req.params;

		const students = await db("students").where({ cohort_id: id });

		if (!students.length)
			res.status(404).json({
				message: "Sorry, but no students were found"
			});

		res.status(200).json(students);
	} catch (err) {
		res.status(500).json({
			message:
				"Sorry, but there was an error while getting those students"
		});
	}
});

// Update cohort
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const cohort = await db("cohorts")
			.where({ id })
			.update(req.body);

		if (cohort < 0)
			return res
				.status(404)
				.json({ message: "Sorry, but that cohort doesn't exist " });

		res.status(200).json(cohort);
	} catch (err) {
		res.status(500).json({
			message:
				"Sorry, but there was an error while trying to update that chohort"
		});
	}
});

// Delete cohort
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const cohort = await db("cohorts")
			.where({ id })
			.del();

		if (cohort < 0)
			return res
				.status(404)
				.json({ message: "Sorry, but that cohort doesn't exist " });

		res.status(200).json(cohort);
	} catch (err) {
		res.status(500).json({
			message:
				"Sorry, but there was an error while trying to delete that cohort"
		});
	}
});

module.exports = router;
