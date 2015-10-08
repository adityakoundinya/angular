(function() {

  var app = angular.module("gitHubViewer");

  var RepoCtrl = function($scope, github, $routeParams, $log) {
    
    var onRepo = function(data){
      $scope.repo = data;
    };
    
    var onError = function(response){
      $scope.error = response;
    };
    
    var repoName = $routeParams.reponame;
    var userName = $routeParams.username;
    
    github.getRepoDetails(userName, repoName)
      .then(onRepo, onError);
  };
  app.controller("RepoCtrl", RepoCtrl);
}());