app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "./app/main/main.html",
    controller: "mainController"
  })
  .when("/biography", {
    templateUrl : "./app/biography/biography.html",
    controller: "biographyController"
  })
  .when("/movieList", {
    templateUrl : "./app/movieList/movieList.html",
    controller: "movieListController"
  })
 
 
});