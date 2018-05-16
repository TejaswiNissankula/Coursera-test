(function (){
'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){

    $scope.name="";
    $scope.displayMessage="";
    $scope.splitname=function (){

      var item=$scope.name;
      var itemList=item.split(',');

      console.log('itemList',itemList+' itemList.length ::',itemList.length);

        if(itemList.length>1 && itemList.length<=3){
          $scope.displayMessage="Enjoy!";

        }else if(itemList.length>3){

          $scope.displayMessage="Too much!";

        }else if(itemList.length==1){

          $scope.displayMessage="Please enter data first";

        }

    };

  }



})();
