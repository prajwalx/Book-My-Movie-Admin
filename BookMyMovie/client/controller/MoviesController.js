angular.module('myApp').controller('MoviesController',function ($scope,$http,$window) {
  $scope.OneRecord=false;
  $scope.MovieYear="";
  $scope.LocalDB=false;
  $scope.SearchMovie = function () {
  $scope.OneRecord=false;

  //  $scope.class="loader";
  $scope.class="fa fa-spinner loader";

    $http.get('https://moviesapi.com/m.php?t='+$scope.MovieName+'&y='+$scope.MovieYear+'&type=movie&r=json').then(function (response,err) {




      var MovieID=response.data[0].id;
      $http.get('https://moviesapi.com/m.php?i='+MovieID+'&type=movie&r=json').then(function(response){
        $scope.MovieDetails=response.data;
        $scope.class="";
        console.log(response.data);
        $scope.OneRecord=true;
      });

    });

  }

  

  $scope.AddMovie = function () {
    $http.post('/SaveMovie',$scope.MovieDetails).then(function (response) {
      console.log('Movie Added');
      $window.alert("Movie Added Successfully");
      $scope.OneRecord=false;
     init();

    });

  }

  var init = function () {
    $http.get('/GetMovies').then(function (response) {
      $scope.DBMovieDetails = response.data;
      if(response.data.length==0)
      $scope.LocalDB=false;
      else {
        $scope.LocalDB=true;
      }

    });

  }


init();
});
