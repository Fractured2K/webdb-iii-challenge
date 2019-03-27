exports.up = function(knex) {
	return knex.schema.createTable("students", function(tbl) {
		tbl.increments(); // primary key

		tbl.string("name", 255).notNullable(); // name column

		tbl.integer("cohort_id") // foreign key for cohort
			.unsigned()
			.references("id")
			.inTable("cohorts")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("students");
};
