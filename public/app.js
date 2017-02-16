/**
File Name:
Created By:
Created Date:
Purpose:
**/

var dashboard = angular.module("dashboard",["ui.router"/*,"satellizer"*/]);
dashboard.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('teaminfo',{
    url:'/teaminfo',
    templateUrl:'templates/teamInfo.html',
    controller:'teamCtrl',
 })
  .state('playerInfo',{
    url:'/playerInfo/:teamName',
    controller:'playerInfoCtrl',
    templateUrl:'templates/playerInfo.html',

 });
$urlRouterProvider.otherwise('/teaminfo');
});
