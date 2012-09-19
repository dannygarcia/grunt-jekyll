module.exports = function( grunt ) {

	// Create a new multi task.
	grunt.registerMultiTask( 'jekyll', 'This triggers the `jekyll` command.', function() {

		// Tell grunt this task is asynchronous.
		var done = this.async(),
			exec = require('child_process').exec,
			command = "jekyll",

			src,
			dest,

			safe = this.data.safe,
			auto = this.data.auto,
			server = this.data.server,
			server_port = this.data.server_port,
			baseurl = this.data.baseurl,
			url = this.data.url,
			markdown = this.data.markdown,
			pygments = this.data.pygments,
			future = this.data.future,
			lsi = this.data.lsi,
			permalink = this.data.permalink,
			paginate = this.data.paginate,
			limit_posts = this.data.limit_posts;

			/*
			// old busted
			config = this.data.config,
			images = this.data.images,
			fonts = this.data.fonts,
			outputstyle = this.data.outputstyle,
			linecomments = this.data.linecomments,
			forcecompile = this.data.forcecompile,
			debugsass = this.data.debugsass,
			relativeassets = this.data.relativeassets,
			libRequire = this.data.require,
			bundleExec = this.data.bundleExec;
			environment = this.data.environment;
			*/

		if (typeof this.data.src !== 'undefined' ) {
			src = grunt.template.process(this.data.src);
		}

		if (typeof this.data.dest !== 'undefined' ) {
			dest = grunt.template.process(this.data.dest);
		}

		if ( bundleExec ) {
			command = 'bundle exec ' + command;
		}

		if (typeof src !== 'undefined' && typeof dest !== 'undefined' ) {
			command += ' "' + src + '" "' + dest + '"';
		}

		if (typeof safe !== 'undefined') {
			command += ' --safe';
		}

		if (typeof auto !== 'undefined') {
			command += ' --auto';
		}

		if (typeof server !== 'undefined') {
			command += ' --server';

			if (typeof server_port !== 'undefined') {
				command += ' ' + server_port;
			}

		} else if (typeof server_port !== 'undefined') {
			command += ' --server ' + server_port;
		}

		if (typeof baseurl !== 'undefined') {
			command += ' --base-url ' + baseurl;
		}

		if (typeof url !== 'undefined') {
			command += ' --url ' + url;
		}

		if (typeof markdown !== 'undefined') {
			command += ' --' + markdown;
		}

		if (typeof pygments !== 'undefined') {
			command += ' --pygments';
		}

		if (typeof future !== 'undefined') {
			command += ' --future';
		}

		if (typeof lsi !== 'undefined') {
			command += ' --lsi';
		}

		if (typeof permalink !== 'undefined') {
			command += ' --permalink=' + permalink;
		}

		if (typeof paginate !== 'undefined') {
			command += ' --paginate ' + paginate;
		}

		if (typeof limit_posts !== 'undefined') {
			command += ' --limit_posts=' + limit_posts;
		}

		/*
		// old busted

		if ( config !== undefined ) {
			command += ' --config="' + config + '"';
		}

		if ( images !== undefined ) {
			command += ' --images-dir="' + images + '"';
		}

		if ( fonts !== undefined ) {
			command += ' --fonts-dir="' + fonts + '"';
		}

		if ( debugsass !== undefined ) {
			if ( debugsass === true ) {
				command += ' --debug-info';
			}
		}

		if ( relativeassets !== undefined ) {
			if ( relativeassets === true ) {
				command += ' --relative-assets';
			}
		}

		if ( outputstyle !== undefined ) {
			command += ' --output-style ' + outputstyle;
		}

		if ( linecomments === false ) {
			command += ' --no-line-comments';
		}

		if ( libRequire !== undefined ) {
			command += ' --require '+ libRequire;
		}

		if ( forcecompile === true ) {
			command += ' --force';
		}

		if ( environment !== undefined ) {
			command += ' -e ' + environment;
		}
		*/

		function puts( error, stdout, stderr ) {

			grunt.log.write( '\n\njekyll output:\n' );
			grunt.log.write( stdout );

			if ( error !== null ) {
				grunt.log.error( error );
				done(false);
			}
			else {
				done(true);
			}
		}

		exec( command, puts );
		grunt.log.write( '`' + command + '` was initiated.' );
	});
};
