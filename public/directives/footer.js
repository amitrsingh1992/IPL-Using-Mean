angular.module("dashboard").directive('footer',function(){
  return {
      replace:true,
      restrict: 'EA',
      templateUrl: 'templates/footer.html'
  }
});
