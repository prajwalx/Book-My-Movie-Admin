angular.module('myApp').controller('UserController',function ($scope,$http,$window) {
$scope.add=true;
$scope.save=false;
$scope.User = {FirstName:"",
LastName:"",
Email:"",
Country:""};



  $scope.RegisterUser = function () {
    $http.post('/SaveUser',$scope.User).then(function (response) {
      console.log("User Registered");
      init();
      $window.alert("Theatre Added Successfully!");
      resetForm();
    });
    init();

  }
  $scope.SaveUser = function () {

    $http.post('/EditUser/'+$scope.UserID,$scope.User).then(function (response) {
      console.log('Data Updated');
      $window.alert("Theatre Edited Successfully!");
      resetForm();
      init();
      $scope.add=true;
      $scope.save=false;
    });
    init();

  }
  $scope.DeleteUser = function (User) {
    $http.delete('/DeleteUser/'+User._id).then(function (response) {
      console.log('USer Deleted');
      $window.alert("Theatre Deleted Successfully!");
      init();
    });

  }
  $scope.GetUser = function(User) {
    $scope.add=false;
    $scope.save=true;
    $http.get('/FindUser/'+User._id).then(function (response) {
       console.log(response.data);
       $scope.UserID=User._id;
      //  document.getElementById('TName').value=response.data[0].FirstName;
      //  document.getElementById('State').value=response.data[0].LastName;
      //  document.getElementById('City').value=response.data[0].Email;
      //  document.getElementById('Seats').value=response.data[0].Country;
       //document.getElementById('country').value=response.data[0].Country;
       $scope.User.TheatreName=response.data[0].TheatreName;
       $scope.User.State=response.data[0].State;
       $scope.User.City=response.data[0].City;
       $scope.User.Seats=response.data[0].Seats;
     });
     //init();

  }
  var init = function () {
    $http.get('/GetUser').then(function (response) {
      $scope.TheatreDetails = response.data;

    });

  }
  init();

  var resetForm = function () {
    $scope.User.TheatreName="";
    $scope.User.State="";
    $scope.User.City="";
    $scope.User.Seats="";
  }
});
