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
		 			// souremap: 'none',
		 		},
		 		files: {
		 			'compiled/style.css': 'scss/style.scss'
		 		}
		 	},
		 	 dist: {
		 		options: {
		 			style: 'compressed',
		 			// souremap: 'none',
		 		},
		 		files: {
		 			'compiled/style-min.css': 'scss/style.scss',
		 			'compiled/_portfolio-min.css': 'scss/_portfolio.scss',
		 			'compiled/_contact-min.css': 'scss/_contact.scss'
		 		}
		 	}
		 },

		 /**
		  * Autoprefixer
		  */
		  autoprefixer: {
		  	options: {
		  		browsers: ['last 2 versions']
		  	},
		  	// prefix all files
		  	multiple_files: {
		  		expand: true,
		  		flatten: true,
		  		src: 'compiled/*.css',
		  		dest: ''
		  	}
		  },

		/**
		 * Watch task
		 */
		 watch: {
		 	sass: {
		 		files: 'scss/*.scss',
		 		tasks: ['sass']
		 	}
		 }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default', ['watch']);
};