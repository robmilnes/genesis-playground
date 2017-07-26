module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    cleancss: true,
                    optimization: 2,
                    dumpLineNumbers: 'false'
                },
                files: {
                    "public/assets/css/genesis.css": "less/genesis.less"
                }
            }
        },

        watch: {
            options: {
                livereload: false
            },
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};