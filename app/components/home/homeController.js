var myApp = angular.module("myApp");

myApp.controller('homeController', ['$scope', 'homeService', function($scope, homeService) {
  $scope.value = "Hi from homeController";
  homeService.sayHello();
}]);
