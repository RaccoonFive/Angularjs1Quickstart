var myApp = angular.module("myApp");

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        controller: "homeController",
        templateUrl : "app/components/home/homeView.html"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
