angular.module("dashboard").controller("playerInfoCtrl",function ($rootScope,$scope,$state,myService,$stateParams) {

  myService.httpCall("playerinfo/"+$stateParams.teamName).then(function (data) {
    $scope.player=data.data;
    console.log($rootScope.team);
    if($rootScope.team===undefined)
    {
      myService.httpCall("teamInfo").then(function (data) {

        $rootScope.team =data.data;
      });
    }
    console.log($scope.player);
  }).catch(function (error) {
    console.log(error);
  });
});
