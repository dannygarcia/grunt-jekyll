/*global module*/
module.exports = function (grunt) {

	// Create a new multi task.
	grunt.registerMultiTask('jekyll', 'This triggers the `jekyll` command.', function () {

		// Tell grunt this task is asynchronous.
		var done = this.async(),
			exec = require('child_process').exec,
			command = 'jekyll',

			optionList = {
				'src': '--source',
				'dest': '--destination',
				'safe': '--safe',
				'plugins': '--plugins',
				'layouts': '--layouts',
				'watch': '--watch',
				'auto': '--watch',
				'config': '--config',
				'drafts': '--drafts',
				'future': '--future',
				'lsi': '--lsi',
				'limit_posts': '--limit_posts',
				'port': '--port',
				'server_port': '--port',
				'host': '--host',
				'baseurl': '--baseurl',

				// deprecated flags
				'paginate': false,
				'permalink': false,
				'markdown': false,
				'url': false
			},

		// Support 'options' and bare style configuration
		options = Object.keys(this.options()).length ? this.options() : this.data;

		if (options.bundleExec) {
			command = 'bundle exec ' + command;
		}

		if (options.server) {
			command += ' serve';
		} else {
			command += ' build';
		}

		// Add optionList options to command
		Object.keys(optionList).forEach(function (option) {
			if (options[option]) {
				command += ' ' + optionList[option];
				if (typeof options[option] !== 'boolean') {
					command += ' ' + options[option];
				}
				if (!options[option]) {
					grunt.warn('`' + option + '` has been deprecated. You may want to try this option in the configuration file.');
				}
			}
		});

		function puts(error, stdout, stderr) {

			grunt.log.write('\n\nJekyll output:\n');
			grunt.log.write(stdout);

			if (error) {
				grunt.log.error(error);
				done(false);
			} else {
				done(true);
			}
		}

		exec(command, puts);
		grunt.log.write('`' + command + '` was initiated.');
	});
};
