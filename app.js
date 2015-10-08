(function(module) {
  module.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",  
        controller: "MainCtrl"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserCtrl"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "repo.html",
        controller: "RepoCtrl"
      })
      .otherwise({redirectTo: "/main"})
  }); 
 
}(angular.module("gitHubViewer", ["ngRoute"])));