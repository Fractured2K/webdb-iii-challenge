exports.up = function(knex) {
	return knex.schema.createTable("cohorts", function(tbl) {
		tbl.increments(); // primary key

		tbl.string("name", 255).notNullable(); // name column
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("cohorts");
};
