(function() {

  var github = function($http) {

    var getuser = function(userName) {
      return $http.get("https://api.github.com/users/" + userName)
        .then(function(response) {
          return response.data;
        });
    };

    var getrepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getrepodetails = function(userName, repoName) {
      var repo;
      var repoUrl = "https://api.github.com/repos/" + userName + "/" + repoName;
      return $http.get(repoUrl)
        .then(function(response) {
          repo = response.data;
          return $http.get(repoUrl + "/contributors");
        })
        .then(function(response){
          repo.contributors = response.data;
          return repo;
        });
    };

    return {
      getUser: getuser,
      getRepos: getrepos,
      getRepoDetails: getrepodetails
    };
  };
  var module = angular.module("gitHubViewer");
  module.factory("github", github);
}());