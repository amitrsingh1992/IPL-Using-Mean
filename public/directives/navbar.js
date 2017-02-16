angular.module("dashboard").directive('navigation',function(){
  return {
      replace:true,
      restrict: 'EA',
      templateUrl: 'templates/nav.html'
  }
});
