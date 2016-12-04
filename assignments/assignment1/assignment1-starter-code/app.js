(function() {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishList = "";
    $scope.message = "";
    $scope.check = function() {
      var cnt = 0;
      $scope.dishList.split(",").forEach(function(elem) {
        if (elem.trim() !== "") {
          cnt = cnt + 1;
        }
      });
      if (cnt === 0) {
        $scope.message = "Please enter data first";
      } else if (cnt < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();