module.exports = function(grunt){

    grunt.initConfig({

        clean: {

            images: {
                src: ['.tmp/images/**/*']
            },

            css: {
                src: ['.tmp/css/**/*']
            }

        },

        concat: {

            css: {
                src: ['src/css/reset.css', 'src/css/global.css', 'src/css/index.css', 'src/css/produtos.css', 'src/css/contato.css', 'src/css/mediaqueries.css'],
                dest: '.tmp/css/styles.min.css'
            }
        },

        cssmin: {
            css: {
                files: {
                    '.tmp/css/styles.min.css': '.tmp/css/styles.min.css'
                }
            }
        },

        image: {
            
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: '.tmp/images/'
                }]
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-image');

};