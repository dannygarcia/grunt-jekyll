grunt-jekyll
============

Simple grunt Jekyll task. The code base is inspred by [grunt-compass](https://github.com/kahlil/grunt-compass).

This means its use is similar but is outlined in detail here.

## Dependencies

You need to have [node.js](http://nodejs.org/), [grunt.js](https://github.com/cowboy/grunt), [Ruby](http://www.ruby-lang.org/) and [Jekyll](https://github.com/mojombo/jekyll/) installed for this to work.

## Quick Start

Follow [this grunt.js example](https://gist.github.com/3753650) to get started with grunt-jekyll right away!

## Installation & Options

All the configuration options are on the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki/configuration).

1. Install this grunt plugin next to your project's grunt.js gruntfile with: `npm install grunt-jekyll`.
2. Call `grunt.loadNpmTasks('grunt-jekyll')` in your gruntfile.
3. Configure `grunt jekyll` to watch your html files and call the task(s).
	e.g.:

	```javascript
	watch: {
		files: ['templates/*.html'],
		tasks: ['jekyll:dev', 'jekyll:prod']
	}
	```

4. Setup your HTML paths

	```javascript
	src: 'templates/',
	dest: 'dist/'
	```

	`src` is the folder with your html templates and `dest` is the folder where the compiled files will be placed.

5. Disable custom plugins like this:

	```javascript
	safe: 'false'
	```
6. Watch for file chnages like this:

	```javascript
	auto: true
	```
7. Start the Jekyll server:

	```javascript
	server: true
	```
8. Set the server port:

	```javascript
	server_port: 8000
	```

9. Server website from a given url:

	```javascript
	baseurl: 'http://example.com'
	```

10. Sets site.url, useful for environment switching:

	```javascript
	url: 'http://other-url.com'
	```

11. Customize engine type

	```javascript
	markdown: 'maruku'
	```

12. Enables highlight tag with Pygments:

	```javascript
	pygments: true
	```

13. Publishes posts with a future date:

	```javascript
	future: true
	```

14. Produces an index for related posts:

	```javascript
	lsi: true
	```

15. Controls the URLs that posts are generated with:

	```javascript
	permalink: 'pretty'
	```	

16. Per-page pagination value:

	```javascript
	paginate: 10
	```	

17. Limits the number of posts to parse and publish:

	```javascript
	limit_posts: 30
	```	

18. Run "grunt watch" and make cool stuff!

# An Example Setup

```javascript
jekyll: {
	dev: {
		src : 'templates/',
		dest : 'dev/',
		server_port : 3333,
		future : true,
		permalink : 'pretty',
		paginate : 20
	},
	prod: {
		src : 'templates/',
		dest : 'prod/',
		server_port : 8000,
		permalink : 'pretty',
		paginate : 10
	}
}
```

# Changelog

v0.1.0: Initial Release.

----

## MIT License

grunt-jekyll is freely distributable under the terms of the MIT license.

Copyright (c) 2012, Danny Garcia. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
