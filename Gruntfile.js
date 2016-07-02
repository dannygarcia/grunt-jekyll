'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: {
			name: 'grunt-jekyll'
		},

		jekyll: {
			options: {
				src: 'test/app'
			},
			actual: {
				options: {
					dest: 'test/actual'
				}
			},
			expected : {
				options: {
					dest: 'test/expected'
				}
			}
		},

		mochaTest: {
			options: {
				reporter: 'list'
			},
			src: 'test/test.js'
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: {
				src: ['Gruntfile.js', 'tasks/*.js', 'test/*.js']
			}
		},

		conventionalChangelog: {
			options: {
				changelogOpts: {
					preset: 'angular'
				}
			},
			dist: {
				src: 'CHANGELOG.md'
			}
		},

		bump: {
			options: {
				files: ['package.json'],
				commitMessage: 'chore: release v%VERSION%',
				commitFiles: ['-a'],
				tagMessage: 'chore: create tag %VERSION%',
				push: false
			}
		},

		'npm-contributors': {
			options: {
				commitMessage: 'chore: update contributors'
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('test', [
		'jshint',
		'jekyll:expected',
		'mochaTest'
	]);

	grunt.registerTask('release', 'bump, changelog and publish to npm.', function(type) {
		grunt.task.run([
			'npm-contributors',
			'bump:' + (type || 'patch') + ':bump-only',
			'conventionalChangelog',
			'bump-commit',
			'npm-publish'
		]);
	});

	grunt.registerTask('default', 'test');
};
