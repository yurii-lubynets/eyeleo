module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/style.css': 'scss/style.scss'
            }
        }
    },

    'http-server': {
 
        'dev': {
 
            // the server root directory 
            root: './public/',
 
            // the server port 
            // can also be written as a function, e.g. 
            // port: function() { return 8282; } 
            // port: 3030,
 
            // the host ip address 
            // If specified to, for example, "127.0.0.1" the server will 
            // only be available on that ip. 
            //ec Spify "0.0.0.0" to be available everywhere 
            // host: "0.0.0.0",

            showDir : true,
            autoIndex: true,
 
            // server default file extension 
            ext: "html",

 
            // specify a logger function. By default the requests are 
            // sent to stdout. 
            logFn: function(req, res, error) { },
 
            // Proxies all requests which can't be resolved locally to the given url 
            // Note this this will disable 'showDir' 
           
 
          
 
            // customize url to serve specific pages 
            customPages: {
                "/readme": "README.md",
                "/readme.html": "README.html"
            }
 
        }
 
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};