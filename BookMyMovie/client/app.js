var app = angular.module('myApp',['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/',{
    templateUrl:'./views/home.html',
    controller: 'UserController'
  }).when('/movies',{
    templateUrl:'./views/movies.html',
    controller:'MoviesController'
  }).when('/about',{
    templateUrl:'./views/about.html'
  });

});
