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
            a11yTree: {
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
            },
            a11yButton: {
                options: {
                    compress: true,
                    yuicompress: true,
                    sourceMap: true,
                    sourceMapFilename: 'css/a11yButton.min.css.map',
                    sourceMapURL: '../css/a11yButton.min.css.map',
                    sourceMapBasepath: 'css'
                },
                files: {
                    "css/a11yButton.min.css": "css/a11yButton.less"
                }
            },
            isKey: {
                options: {
                    compress: true,
                    yuicompress: true,
                    sourceMap: true,
                    sourceMapFilename: 'css/isKey.min.css.map',
                    sourceMapURL: '../css/isKey.min.css.map',
                    sourceMapBasepath: 'css'
                },
                files: {
                    "css/isKey.min.css": "css/isKey.less"
                }
            },
            longmatthewh: {
                options: {
                    compress: true,
                    yuicompress: true,
                    sourceMap: true,
                    sourceMapFilename: 'css/longmatthewh.min.css.map',
                    sourceMapURL: '../css/longmatthewh.min.css.map',
                    sourceMapBasepath: 'css'
                },
                files: {
                    "css/longmatthewh.min.css": "css/longmatthewh.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['css/a11yTree.less', 'css/a11yButton.less', 'css/isKey.less', 'css/longmatthewh.less'],
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