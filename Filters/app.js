(function (){

  'use strict';

  angular.module('FilterApp',[])
  .controller('FilterAppController',FilterAppController);

  FilterAppController.$inject=['$scope','$filter'];
  function FilterAppController($scope,$filter){

    $scope.name="Tejaswi";
    $scope.status="I'M Hungry Please feed me";
    $scope.fed=function (){

      var upcase=$filter('uppercase')("Thanks for Feeding me!! Live Long :)");
      $scope.status=upcase;
    }

  }

})();
