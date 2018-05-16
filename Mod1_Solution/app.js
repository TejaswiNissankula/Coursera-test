(function (){
'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController(){

    $scope.name="";
    $scope.displayMessage="";
    $scope.splitname=function (){

      var itemList=$scope.name.split(',');

        if(itemList.size()<=3){

          $scope.displayMessage="Enjoy!";

        }else if(itemList.size()>3){

          $scope.displayMessage="Too much!";

        }else if(itemList.size()==0){

          $scope.displayMessage="Please enter data first";

        }

    };

  }



})();
