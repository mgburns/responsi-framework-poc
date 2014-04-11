# Responsi Framework POC

A proof-of-concept for trying on a few different approaches for the upcoming Responsi theme.

* Starts with [_s](http://underscores.me/)
* Adds [SASS](http://sass-lang.com/) for good measure
* Built with [Grunt](http://gruntjs.com/)

## Prerequisites

1. [Node.js](http://nodejs.org/) / [NPM](https://www.npmjs.org/)
2. [Grunt CLI](https://www.npmjs.org/package/grunt-cli)

Install Node / NPM from https://www.npmjs.org, then install Grunt CLI globally via command line:

```bash
$ npm install -g grunt-cli
```

## Getting Started

```bash
# Clone this repository into your WordPress install
$ cd path/to/wordpress/wp-content/themes
$ git clone https://github.com/mgburns/responsi-framework-poc
$ cd responsi-framework-poc

# Install development dependencies
$ npm install

# Run grunt tasks
$ grunt

# Leave Grunt running while you work
$ grunt watch
```

## Development Workflow

### Styles

All styles are defined in `*.scss` files located in the `sass` directory.

Grunt will compile `sass/style.scss` into  `style.css`, and then minify it as `style.min.css`.

### Scripts

All Javascript files in `js/src` will be concatenated into `js/responsi.js` by Grunt.
All Javascript files in `js` will be uglified into `*.min.js`.

All scripts and styles are enqueued in `functions.php`.
The theme uses the `SCRIPT_DEBUG` constant to determined whether or not to serve the minified version or not.

If you want to load uncompiled files during development, add the following to `wp-config.php`:

```php
define( 'SCRIPT_DEBUG', true );
```
