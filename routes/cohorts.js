const router = require("express").Router();

// Knex connection
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

// Create cohort
router.post("/", async (req, res) => {});

module.exports = router;
