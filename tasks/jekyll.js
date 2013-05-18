/*global module*/
module.exports = function (grunt) {

	// Create a new multi task.
	grunt.registerMultiTask('jekyll', 'This triggers the `jekyll` command.', function () {

		// Tell grunt this task is asynchronous.
		var done = this.async(),
			exec = require('child_process').exec,
			command = "jekyll",

			optionList = [
				{ name : "src", flag : "--source" },
				{ name : "dest", flag : "--destination" },
				{ name : "safe", flag : "--safe" },
				{ name : "plugins", flag : "--plugins" },
				{ name : "layouts", flag : "--layouts" },
				{ name : "watch", flag : "--watch" },
				{ name : "auto", flag : "--watch" },
				{ name : "config", flag : "--config" },
				{ name : "drafts", flag : "--drafts" },
				{ name : "future", flag : "--future" },
				{ name : "lsi", flag : "--lsi" },
				{ name : "limit_posts", flag : "--limit_posts" },
				{ name : "port", flag : "--port" },
				{ name : "server_port", flag : "--port" },
				{ name : "host", flag : "--host" },
				{ name : "baseurl", flag : "--baseurl" },

				// deprecated flags
				{ name : "paginate", flag : false },
				{ name : "permalink", flag : false },
				{ name : "markdown", flag : false },
				{ name : "url", flag : false }
			],

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

		optionList.forEach(function (option, i) {

			var userOption = options[optionList[i].name];

			if (userOption) {
				if (option.flag) {
					command += ' ' + option.flag;
					if (typeof userOption !== 'boolean') {
						command += ' ' + userOption;
					}
				} else {
					grunt.warn('`' + option.name + '` has been deprecated. You may want to try this option in the configuration file.');
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
