module.exports = function( grunt ) {
	'use strict';

	// Project configuration
	grunt.initConfig( {

		// Extract theme info from package.json
		pkg: grunt.file.readJSON( 'package.json' ),

		// Javascript concatentation
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n'
			},
			theme: {
				src: [ 'js/src/*.js' ],
				dest: 'js/responsi.js'
			}
		},

		// Javascript syntax checking
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			theme: [ 'js/**/*.js' ],
		},

		// Javascript minification
		uglify: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n',
				mangle: {
					except: [ 'jQuery' ]
				}
			},
			theme: {
				src: [ 'js/responsi.js' ],
				dest: 'js/responsi.min.js'
			}
		},

		// SASS compilation
		// Compiles "sass/style.scss" -> "style.css" (WP theme entry point)
		sass: {
			theme: {
				files: {
					'style.css': 'sass/style.scss'
				}
			}
		},

		// CSS minification
		cssmin: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n'
			},
			minify: {
				expand: true,

				cwd: '.',
				src: [ 'style.css' ],

				dest: '.',
				ext: '.min.css'
			}
		},

		watch: {
			sass: {
				files: [ 'sass/*.scss' ],
				tasks: [ 'sass', 'cssmin' ],
				options: {
					debounceDelay: 500
				}
			},
			scripts: {
				files: [ 'js/src/**/*.js', 'js/vendor/**/*.js' ],
				tasks: [ 'jshint', 'concat', 'uglify' ],
				options: {
					debounceDelay: 500
				}
			}
		}
	} );

	// Load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Default task.
	grunt.registerTask( 'default', [ 'jshint', 'concat', 'uglify', 'sass', 'cssmin' ] );

};
