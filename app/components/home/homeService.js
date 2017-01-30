var myApp = angular.module("myApp");

myApp.service('homeService', function () {
  this.sayHello = function () {
    console.log("Hello from homeService!");
  }
});
