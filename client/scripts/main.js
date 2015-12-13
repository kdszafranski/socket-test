/**
 * Created by cedrix on 12/13/15.
 */
var CastleKings = angular.module('CastleKings', ['ngRoute']);

CastleKings.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/index', {
            templateUrl: "assets/views/templates/route_index.html",
            controller: "IndexController"
        })
        .otherwise({
            redirectTo: 'index'
        });

}]);