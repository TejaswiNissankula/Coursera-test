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
      console.log('item::'+item);
      var itemList;
      if(item!=null && item!=''){
        itemList=item.split(',');
        console.log('item::'+item);
        console.log('itemList',itemList+' itemList.length ::',itemList.length);
      }
      //else
        //itemList.Length=0;
      console.log('itemList',itemList);



        if(itemList=='undefined' || itemList==null || itemList==''){

          $scope.displayMessage="Please enter data first";

        }else {

          for(var i=0;i<itemList.length;i++){
            console.log('index beofe if',i);
            if(itemList[i]==""){
              console.log('index',i);
              itemList.splice(i,1);
            }

          }
          console.log('itemList else loop',itemList);
            if(itemList.length>0 && itemList.length<=3){
                $scope.displayMessage="Enjoy!";

              }else if(itemList.length>3){

                $scope.displayMessage="Too much!";

              }
          }

      };

  }



})();
