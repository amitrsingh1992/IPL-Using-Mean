angular.module("dashboard").controller("playerInfoCtrl",function ($scope,$state,myService,$stateParams) {

  myService.httpCall("playerinfo/"+$stateParams.teamName).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.log(error);
  });
});
