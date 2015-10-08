(function() {

  var app = angular.module("gitHubViewer");

  var MainCtrl = function($scope, $interval, $location, $log) {

    var decrementCountDown = function() {
      $scope.countDown -= 1;
      if ($scope.countDown < 1) {
        $scope.search($scope.userName);
      }
    };

    var countDownInterval = null;
    var startCountDown = function() {
      countDownInterval = $interval(decrementCountDown, 1000, $scope.countDown);
    };

    $scope.search = function(userName) {
      if (countDownInterval) {
        $interval.cancel(countDownInterval);
        $scope.countDown = null;
      }
      $log.info("search method: "+ userName);
      $location.path("/user/" + userName);
    };

    $scope.userName = "adityakoundinya";
    $scope.countDown = 5;
    startCountDown();
  };

  app.controller("MainCtrl", MainCtrl);

}());