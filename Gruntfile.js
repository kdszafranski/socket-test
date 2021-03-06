module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/scripts/controllers/*.js',
                dest: "server/public/assets/scripts/controllers/controller.min.js"
            }
        },
        copy: {
            scripts: {
                expand: true,
                cwd:'client/scripts',
                src: [
                    "*",
                    "*/*"
                ],
                "dest": 'server/public/scripts/'
            },
            //io: {
            //    expand: true,
            //    cwd:'node_modules/socket.io/node_modules/socket.io-client',
            //    src: [
            //        "socket.io.js"
            //    ],
            //    "dest": 'server/public/vendors/'
            //},
            angular: {
                expand: true,
                cwd: 'node_modules/angular',
                src: [
                    "angular.min.js",
                    "angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules/angular-route',
                src: [
                    "angular-route.min.js",
                    "angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: "client/views",
                src: [
                    "*",
                    "*/*"
                ],
                dest: "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: "client/styles",
                src: '*.css',
                dest: 'server/public/assets/styles'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy']);
};