module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass task
		 */
		 sass: {
		 	dev: {
		 		options: {
		 			style: 'expanded',
		 			souremap: 'none',
		 		},
		 		files: {
		 			'compiled/style.css': 'sass/style.scss'
		 		}
		 	},
		 	 dist: {
		 		options: {
		 			style: 'compressed',
		 			souremap: 'none',
		 		},
		 		files: {
		 			'compiled/style-min.css': 'sass/style.scss'
		 		}
		 	}
		 },

		/**
		 * Watch task
		 */
		 watch: {
		 	css: {
		 		files: '**/*.scss',
		 		tasks: ['sass']
		 	}
		 }
	});

	grunt.loadNmpTasks('grunt-contrib-sass');
	grunt.loadNmpTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};