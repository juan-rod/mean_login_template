module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    jshint: {
      files: ['public/app/*.js', 'app/*.js'],
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in data
      build: ['Gruntfile.js', 'public/app/*.js', 'app/*.js']
    },
    sass: {
      dist: {
        files: {
          'public/styles/css/main.css': 'public/styles/scss/main.scss'
          
        }
      }
    },
    watch: {
      app: {
        files: ['public/app/*.js', 'app/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['public/styles/scss/*.scss','public/styles/scss/partials/*.scss'],
        tasks: ['sass']
      }
      
    }
  
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch','uglify']);
};