(function(){

  'use strict';

  angular.module('NameCalculator',[])

  .controller('NameCalculatorController',function($scope){

    $scope.name="";
    $scope.totalvalue=0;
    $scope.displayNumeric=function(){

      var totalnumericvalue=calculatenumericvalue($scope.name);
      $scope.totalvalue=totalnumericvalue;

    }

    function calculatenumericvalue(string){
      var totalstringnumericvalue=0;
      for(var i=0;i<string.length;i++){

        totalstringnumericvalue+=string.charCodeAt(i);
      }
      return totalstringnumericvalue;

    }


  });

}

)();
