module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> */\n'
            },
            build: {
                src: 'js/a11yTree.init.js',
                dest: 'js/a11yTree.init.min.js'
            }
        },
        jshint: {
            all: ['js/a11yTree.init.js']
        },
        less: {
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    sourceMap: true,
                    sourceMapFilename: 'css/a11yTree.min.css.map',
                    sourceMapURL: '../css/a11yTree.min.css.map',
                    sourceMapBasepath: 'css'
                },
                files: {
                    "css/a11yTree.min.css": "css/a11yTree.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['css/a11yTree.less'],
                tasks: ['less'],
                options : {
                    spawn : false
                }

            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less','jshint','uglify']);
};