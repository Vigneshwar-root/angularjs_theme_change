var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

app.run(function($rootScope) {
  		localStorage.setItem("value", "one");
 		$rootScope.value = localStorage.getItem("value");
});