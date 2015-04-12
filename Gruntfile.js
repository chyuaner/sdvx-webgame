module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      threejs: {
        files: [
          {
            expand: true,
            cwd: 'components/threejs/build/',
            src: ['*.min.js'],
            dest: 'public/assets/js/'
          }
        ]
      }
    },

    connect: {
        server: {
            options: {
                hostname: '*'
            }
        }
    },

    watch: {
      livereload: {
        files: ['**/*.css', '**/*.js', '**/*.html'],
        tasks: [],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['copy', 'connect','watch']);
}
