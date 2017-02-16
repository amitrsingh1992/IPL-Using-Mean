angular.module("dashboard").controller("teamCtrl",function ($scope,myService,$state,myService) {
myService.httpCall("teamInfo").then(function (data) {

  $scope.team =data.data;
  console.log($scope.team);
});
});
