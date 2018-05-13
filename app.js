(function (){
  'use strict';
  angular.module('myFirstAngularApp',[])

  .controller('NameCalculatorController',function ($scope){
    $scope.name='';
    $scope.totalvalue=0;
    $scope.decimalCalculator=function (){
      var totalnumericvalue=mycalculator($scope.name);
      $scope.totalvalue=totalnumericvalue;

  };
  function mycalculator(string){
    var totalstringvalue=0;
    for(var i=0;i<string.lenght;i++)
    totalstringvalue+=string.charCodeAt(i);
  }

  });
})();
