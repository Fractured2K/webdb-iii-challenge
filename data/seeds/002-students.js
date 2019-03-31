exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("students")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("students").insert([
				{ name: "Joel", cohort_id: 1 },
				{ name: "Larry", cohort_id: 1 },
				{ name: "Maynard", cohort_id: 2 },
				{ name: "Nick", cohort_id: 2 },
				{ name: "Skyelar", cohort_id: 3 },
				{ name: "Xander", cohort_id: 3 }
			]);
		});
};
