module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ' \n\n// =========================================\n\n'
      },
      dist: {
        src: ['client/components/*.js'],
        dest: 'public/concatedComponents.js'
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    clean: ['public/*', 'client/transpiledComponents.min.js', 'client/assets/style.min.css']
    ,
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015', 'react']
      },
      dist: {
        files: {
          'public/transpiledComponents.js':'public/concatedComponents.js'
        }
      }
    },
    uglify: {
      my_target:{
        files: {
          'client/transpiledComponents.min.js':'public/transpiledComponents.js'
        }
      }
    },

    eslint: {
      target: [
        // Add list of files to lint here
      ]
    },

    cssmin: {
      target:{
        files: {
          'client/assets/style.min.css': ['client/assets/style.css']
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'client/components/**/*.js',
          'assets/**/*.js',//we have to take out css from assets
        ],
        tasks: [
          'build'
        ]
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });


  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
    }
    grunt.task.run([ 'server-dev' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask( 'test', [
    
  ]);

  grunt.registerTask('build', [
    'clean', 'concat', 'babel','uglify','cssmin'
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    // add your deploy tasks here
  ]);


};
