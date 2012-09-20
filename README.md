# grunt-jekyll

Straightforward grunt.js Jekyll plugin. The code base is inspred by [grunt-compass](https://github.com/kahlil/grunt-compass). This means its use is similar but outlined in detail here.

## Dependencies

You need to have [node.js](http://nodejs.org/), [grunt.js](https://github.com/cowboy/grunt), [Ruby](http://www.ruby-lang.org/) and [Jekyll](https://github.com/mojombo/jekyll/) installed for this to work.

## Quick Start

Follow [this grunt.js example](https://gist.github.com/3753650) to get started with grunt-jekyll right away.

## Installation & Options

### Installation

Install this grunt plugin next to your project's grunt.js gruntfile with:
	
	npm install grunt-jekyll

### Configuration Options

All the configuration options are

 * on the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki/configuration).
 * optional
 *  explained here within the `grunt.js` task object context:

<table>
	<tr>
		<th>Object Property</th>
		<th>Type</th>
		<th>Default Value</th>
		<th>Notes</th>
	</tr>
	<tr>
		<td><pre>src</pre></td>
		<td><pre>[path]</pre></td>
		<td><pre>"."</pre></td>
		<td>Source Path</td>
	</tr>
	<tr>
		<td><pre>dest</pre></td>
		<td><pre>[path]</pre></td>
		<td><pre>"./site"</pre></td>
		<td>Destination Path</td>
	</tr>
	<tr>
		<td><pre>safe</pre></td>
		<td><pre>[bool]</pre></td>
		<td><pre>false</pre></td>
		<td>Disables custom plugins.</td>
	</tr>
	<tr>
		<td><pre>auto</pre></td>
		<td><pre>[bool]</pre></td>
		<td><pre>false</pre></td>
		<td>Jekyll watches src path for changes.</td>
	</tr>
	<tr>
		<td><pre>server</pre></td>
		<td><pre>[bool]</pre></td>
		<td><pre>false</pre></td>
		<td>Jekyll Server</td>
	</tr>
	<tr>
		<td><pre>server_port</pre></td>
		<td><pre>[int]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Server Port</td>
	</tr>
	<tr>
		<td><pre>baseurl</pre></td>
		<td><pre>[url]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Serve from URL</td>
	</tr>
	<tr>
		<td><pre>url</pre></td>
		<td><pre>[url]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Sets site.url</td>
	</tr>
	<tr>
		<td><pre>markdown</pre></td>
		<td><pre>[engine]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Markdown Engine</td>
	</tr>
	<tr>
		<td><pre>pygments</pre></td>
		<td><pre>[bool]</pre></td>
		<td><pre>false</pre></td>
		<td>Syntax Highlighting</td>
	</tr>
	<tr>
		<td><pre>future</pre></td>
		<td><pre>[bool]</pre></td>
		<td><pre>false</pre></td>
		<td>Publish Future Posts</td>
	</tr>
	<tr>
		<td><pre>lsi</pre></td>
		<td><pre>[bool]</pre></td>
		<td><pre>false</pre></td>
		<td>Related Posts Index</td>
	</tr>
	<tr>
		<td><pre>permalink</pre></td>
		<td><pre>[style]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Permalink Style</td>
	</tr>
	<tr>
		<td><pre>paginate</pre></td>
		<td><pre>[int]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Per-page Pagination</td>
	</tr>
	<tr>
		<td><pre>limit_posts</pre></td>
		<td><pre>[int]</pre></td>
		<td><pre>undefined</pre></td>
		<td>Max Posts</td>
	</tr>
</table>


## Changelog

v0.2.1: Fixed destination path option.

v0.2.0: Updated README with better options. Options are more flexible.

v0.1.6: Updated README with better example.

v0.1.0: Initial Release.


## MIT License

grunt-jekyll is freely distributable under the terms of the MIT license.

Copyright (c) 2012, Danny Garcia. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
