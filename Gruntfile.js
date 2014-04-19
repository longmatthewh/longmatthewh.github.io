module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    cleancss: true
                },
                files: {
                    "css/a11yTree.min.css": "css/a11yTree.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('clean-css');

    // Default task(s).
    grunt.registerTask('default', ['less']);

};