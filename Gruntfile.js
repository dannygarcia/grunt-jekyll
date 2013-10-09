'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: {
			name: 'grunt-jekyll'
		},

		jekyll: {
			actual: {
				options: {
					dest: './test/actual'
				}
			},
			expected : {
				options: {
					dest: './test/expected'
				}
			},
			options: {
				src: './test/app'
			}
		},

		mocha: {
			options: {
				reporter: 'list'
			},
			src: 'test/test.js'
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('test', [
		'jekyll:expected',
		'mocha'
	]);

	grunt.registerTask('default', 'test');
};