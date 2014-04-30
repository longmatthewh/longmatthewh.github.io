module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};