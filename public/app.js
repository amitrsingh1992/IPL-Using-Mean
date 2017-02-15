var dashboard = angular.module("dashboard",["ui.router"/*,"satellizer"*/]);
dashboard.config(['$stateProvider','$urlRouterProvider','$qProvider',function ($stateProvider,$urlRouterProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  /*var skipIfLoggedIn = ['$q', '$auth','$location', function($q, $auth,$location) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    $location.path('/login');
  } else {
    deferred.resolve();
  }
  return deferred.promise;
}];*/

/*var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.resolve();
  } else {
    $location.path('/login');
  }
  return deferred.promise;
}];*/
  $stateProvider
  /*.state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'loginCtrl',
    resolve: {
     skipIfLoggedIn: skipIfLoggedIn
   }
 })
  .state('signup',{
    url:'/signup',
    controller:'signupCtrl',
    templateUrl:'templates/signup.html',
    resolve: {
     loginRequired: loginRequired
   }
 })*/
  .state('teaminfo',{
    url:'/teaminfo',
    templateUrl:'templates/teamInfo.html',
    controller:'teamInfoCtrl',
    //resolve: {
     //loginRequired: loginRequired
   //}
 })
 /*.state('logout',{
   url:'/logout',
   controller:'logoutCtrl',
   resolve: {
    loginRequired: loginRequired
  }
})*/
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'templates/dashboard.html',
    controller:'dashboardCtrl',
    //resolve: {
    //  loginRequired: loginRequired
   // }
  })
  .state('playerInfo',{
    url:'/playerInfo',
    controller:'playerInfoCtrl',
    templateUrl:'templates/playerInfo.html',
    //resolve: {
     //loginRequired: loginRequired
   //}
 })
$urlRouterProvider.otherwise('/dashboard');
}]);
