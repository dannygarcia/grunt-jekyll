module.exports = function (grunt) {

	// Create a new multi task.
	grunt.registerMultiTask('jekyll', 'This triggers the `jekyll` command.', function () {

		// Tell grunt this task is asynchronous.
		var done = this.async(),
			exec = require('child_process').exec,
			command = "jekyll",

			// User input options.
			opt = {
				src : this.data.src,
				dest : this.data.dest,
				bundleExec : this.data.bundleExec,
				safe : this.data.safe,
				auto : this.data.auto,
				server : this.data.server,
				server_port : this.data.server_port,
				baseurl : this.data.baseurl,
				url : this.data.url,
				markdown : this.data.markdown,
				pygments : this.data.pygments,
				future : this.data.future,
				lsi : this.data.lsi,
				permalink : this.data.permalink,
				paginate : this.data.paginate,
				limit_posts : this.data.limit_posts,
				watch : this.data.watch,
				config : this.data.config
			};

		if (opt.server) {
			command += ' serve';

			if (opt.server_port) {
				command += ' --port ' + opt.server_port;
			}
			console.log(command);
		} else if (opt.server_port) {
			command += ' serve --port ' + opt.server_port;
		} else {
			command += ' build';
		}

		if (opt.src) {
			opt.src = grunt.template.process(opt.src);
		}

		if (opt.dest) {
			opt.dest = grunt.template.process(opt.dest);
		}

		if (opt.bundleExec) {
			command = 'bundle exec ' + command;
		}

		if (opt.src && opt.dest) {
			command += ' "' + opt.src + '" "' + opt.dest + '"';
		}

		if (opt.safe) {
			command += ' --safe';
		}

		if (opt.auto || opt.watch) {
			command += ' --watch';
		}

		if (opt.baseurl) {
			command += ' --base-url ' + opt.baseurl;
		}

		if (opt.url) {
			command += ' --url ' + opt.url;
		}

		if (opt.markdown) {
			command += ' --' + opt.markdown;
		}

		if (opt.pygments) {
			command += ' --pygments';
		}

		if (opt.future) {
			command += ' --future';
		}

		if (opt.lsi) {
			command += ' --lsi';
		}

		if (opt.permalink) {
			command += ' --permalink=' + opt.permalink;
		}

		if (opt.paginate) {
			command += ' --paginate ' + opt.paginate;
		}

		if (opt.limit_posts) {
			command += ' --limit_posts ' + opt.limit_posts;
		}

		if (opt.config) {
			command += ' --config ' + opt.config;
			grunt.log.write(opt.config);
		}

		function puts(error, stdout, stderr) {

			grunt.log.write('\n\nJekyll output:\n');
			grunt.log.write(stdout);

			if (error !== null) {
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
