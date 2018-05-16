(function (){
'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){

    $scope.name="";
    $scope.displayMessage="";
    $scope.splitname=function (){

      var itemList=$scope.name.split(',');

      console.log('itemList',itemList+' itemList.length ::',itemList.length);

        if(itemList.length<=3){
          console.log('itemList.size',itemList.size);
          $scope.displayMessage="Enjoy!";

        }else if(itemList.length>3){

          $scope.displayMessage="Too much!";

        }else if(itemList.length==0){

          $scope.displayMessage="Please enter data first";

        }

    };

  }



})();
