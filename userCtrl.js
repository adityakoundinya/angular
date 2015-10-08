(function() {

  var app = angular.module("gitHubViewer");

  var UserCtrl = function($scope, github, $routeParams, $log) {

    var onError = function(reason) {
      $scope.error = "Cannot fetch data";
    };

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    $scope.userName = $routeParams.username;
    $log.info("route params user:"+$routeParams.username);
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.userName).then(onUserComplete, onError);

  };
  app.controller("UserCtrl", UserCtrl);
}());