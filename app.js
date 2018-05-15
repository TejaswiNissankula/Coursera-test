(function (){

  angular.module('DIApp',[])

  .controller('DIController',DIController);

  function DIController($scope,$filter){

    $scope.name="Tejaswi";
    $scope.upper=function (){

      var upCase=$filter('uppercase');
      $scope.name=upCase($scope.name);

    };

  }

function AnotateMe(hello,baby,sarat){

    return "My Baby!!!";
}
console.log(AnotateMe.toString());

}

)();
