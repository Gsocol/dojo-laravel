module.exports = function(grunt) {
  	grunt.initConfig({
  		//setting npm package file
  		pkg: grunt.file.readJSON('package.json'),

  		//call the plugins
  		watch: {
  			options: {
  				livereload: true,
  			},
  			cssmin: {
  				files: ['html/css/*.css'],
  				tasks: ['cssmin']
  			},
			uglify: {
  				files: ['html/js/*.js'],
  				tasks: ['uglify']
			}

  		},
  		cssmin: {
  			combine: {
  				files : {
  					'html/minify/main.min.css' : ['html/css/main.css']
  				}
  			}
  		},
  		uglify: {
  			dist: {
  				files : {
  					'html/minify/main.min.js' : ['html/js/main.js']
  				}
  			}
  		},
  		express: {
  			all: {
  				options: {
  					port: 1234,
  					hostname: 'localhost',
  					livereload: true,
  					bases: ['.']
  				}
  			}

  		},
  		connect: {
  			server: {
		      	options: {
		      		hostname: 'localhost',
		        	port: 9001,
		        	base: 'html/',
		        	// keepalive: true,
		        	livereload: true
		      	}
		    }
  		}

  	});

  	//load the plugins
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	// grunt.loadNpmTasks('grunt-express');
  	grunt.loadNpmTasks('grunt-contrib-connect');

  	//run the plugins
  	grunt.registerTask('default', ['cssmin', 'uglify']);
  	grunt.registerTask('server', ['connect:server', 'watch']);
};
