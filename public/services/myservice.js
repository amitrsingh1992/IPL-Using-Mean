angular.module("dashboard").service("myService",function ($http) {
  this.ipAddress="http://127.0.0.1:8081/";
  var self = this;
this.httpCall=function (url) {
    return $http.get((self.ipAddress)+url);
}
this.httpUpdate=function (url,data) {
  return $http.put((self.ipAddress)+url,data);
}
})
