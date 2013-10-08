"use strict";

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: {
			name: "grunt-jekyll"
		},

		// Configuration to be run (and then tested).
		jekyll: {
			options: {
				src: "./test/app",
				dest: "./test/actual"
			}
		},

		mochaTest: {
			test: {
				options: {
					reporter: "test"
				},
				src: ["test/test.js"]
			}
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks("tasks");

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-mocha-test');

	// grunt.registerTask('mkdir', grunt.file.mkdir);

	grunt.registerTask("test", [
		"jekyll",
		"mochaTest"
	]);

	// By default, lint and run all tests.
	grunt.registerTask('default', ["jekyll"]);
};