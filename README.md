# grunt-jekyll

Straightforward [Jekyll](http://jekyllrb.com/) [Grunt](http://gruntjs.com/) plugin. It basically triggers the `jekyll` cli command with whatever options you set.

## Dependencies

 * [Node](http://nodejs.org/)
 * [Grunt](http://gruntjs.com/)
 * [Jekyll](http://jekyllrb.com/) `>= v1.0.0`

## Quick Start

Follow [this grunt.js example](https://gist.github.com/3753650) to get started with grunt-jekyll right away.

## Installation & Options

### Installation

Install this grunt plugin next to your project's `gruntfile.js` with:

	npm install grunt-jekyll

It can just as easily be added to `package.json` under `devDependencies` as `grunt-jekyll`.

### Configuration Options

All the configuration options are:

 * At the [Jekyll Documentation](http://jekyllrb.com/docs/configuration/).
 * Optional.
 * Explained here within the plugin's context:

#### server `boolean`

Build with a server (defaults to `false` which just builds).

#### src `string`

Directory where Jekyll will read files.

#### dest `string`

Directory where Jekyll will write files.

#### safe `boolean`

Disables custom plugins.

#### plugins `string`

Plugins directory (defaults to `./_plugins`).

#### layouts `string`

Layouts directory (defaults to `./_layouts`).

#### watch `boolean`

Enable auto-regeneration of the site when files are modified.

#### auto `boolean`

Alias for `watch`.

#### config `string`

Custom configuration file directory.

#### drafts `boolean`

Process and render draft posts.

#### future `boolean`

Publishes posts with a future date.

#### lsi `boolean`

Produce an index for related posts.

#### limit_posts `number`

Limit the number of posts to parse and publish.

#### port `string or number`

Listen on the given port (requires `server`).

#### server_port `string or number`

Alias for `port`.

#### host `string`

Listen at the given hostname (requires `server`).

#### baseurl `string`

Serve the website from the given base URL (requires `server`).

#### bundleExec `boolean`

Run `jekyll` with [bundle exec](http://gembundler.com/v1.3/man/bundle-exec.1.html).

## To-do

 - Provide in-line code examples to this readme.


## Changelog

v0.3.8: Added robwierzbowski's raw option and other PRs.

v0.3.6:

 - Reviewed Jekyll [source](https://github.com/mojombo/jekyll/blob/master/bin/jekyll) and updated plugin with new flags.
 - Reviewed and warned about deprecated flags.
 - Updated documentation to match flag updates. (Rewritten as a list)

v0.3.3: Updated link in documentation. Added to-do list.

v0.3.2: Added option to select config file. Removed deprecated --pygments option flag. Bugfixes.

v0.3.0: Update for Jekyll 1.0

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
