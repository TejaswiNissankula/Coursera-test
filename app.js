(function (){
'use strict';

  angular.module('myFirstAngularApp',[])

  .controller('myFirstController',['$scope',function ($scope){
    $scope.name="Tejaswi";
    $scope.car="JAZZ";
  }]);
})();
