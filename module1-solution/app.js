(function(){

'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController($scope)
{
  $scope.lunch_list = "";
  $scope.message = "";

  $scope.checkList = function () {
      var re=/\s*,\s*/;
      var arrayOfStrings = $scope.lunch_list.split(re);
      if(arrayOfStrings.length>3)
      {
          $scope.message="Too much!";
      }
      else {
        if(arrayOfStrings.length==1)
          $scope.message="Please enter data first";
        else
          $scope.message="Enjoy!";
      }
  };

}



})();
