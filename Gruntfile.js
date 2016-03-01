/* This file handles all the grunt tasks to be performed. 
-The concat task concats all the js files in in components folder and stores 
them in the concatedComponents file in public folder.
-The babel task transpiles the es6 to es5 version in the concatedcomponents file and stores in public/transpiledComponents.js 
-The uglify task minifies the transpiled file - public/transpiledComponents.js aand stores in client/transpiledComponents.min.js file
-The cssmin task minfifies all style.css files and stores it in 'client/assets/style/style.min.css' file
-The clean task deletes all the files in public folder, the minified js file and also the minified css file.
-The watch task runs the 'Build' task whenever there is any change in the js files in components folder and style.css file 
-The nodemon task runs nodemon server on server/server.js file.
 */


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
        script: 'server/server.js'
      }
    },

    clean: ['public/*', 'client/transpiledComponents.min.js', 'client/assets/style/style.min.css']
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
          'client/assets/style/style.min.css': ['client/assets/style/style.css']
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'client/components/**/*.js',
          'client/assets/style/style.css'
        ],
        tasks: [
          'build'
        ]
      }
    },

    simplemocha: {
      options: {
        globals: ['expect', 'sinon'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        repoter: 'spec'
      },
      server: {
        src: ['test/backend-tests.js']
      }
    }
    ,

    shell: {
      prodServer: {
      }
    },
  });

//All tasks in grunt has to be loaded before being run using the grunt.loadNpmTasks command.

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-simple-mocha');

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
    'simplemocha'   
  ]);
//The 'build' task runs all these tasks - 'clean', 'concat', 'babel','uglify','cssmin' in the specified order.

  grunt.registerTask('build', [
    'clean', 'concat', 'babel','uglify','cssmin'
  ]);
//The grunt run task will first run 'build' task and then run the nodemon task
  grunt.registerTask('run', [
    'build', 'nodemon:dev'
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
