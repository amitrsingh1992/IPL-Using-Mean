angular.module("dashboard").controller("teamCtrl",function ($rootScope,myService,$state,myService) {
myService.httpCall("teamInfo").then(function (data) {

  $rootScope.team =data.data;
});
});
