(function(){

  'use strict';

  angular.module('NameCalculator',[])

  .controller('NameCalculatorController',function($scope){

    $scope.name="";
    $scope.totalvalue=0;
    $scope.displayNumeric=function(){

      var totalnumericvalue=0;
      $scope.totalvalue=totalnumericvalue;

    }

    function calculatenumericvalue(string){

      for(var i=0;i<strong.length;i++){

        totalnumericvalue+=string.charCodeAt(i);
      }
      return totalnumericvalue;

    }


  });

}

)();
