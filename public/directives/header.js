angular.module("dashboard").directive('header',function(){
  return {
      replace:true,
      restrict: 'EA',
      templateUrl: 'templates/headers.html'
  }
});
