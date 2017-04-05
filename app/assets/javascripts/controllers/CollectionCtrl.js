function CollectionController($scope, $http, CollectionService) {

  var ctrl = this;

  // ctrl.getCollections = function() {
  //   console.log("calling the function")
  //   CollectionService.getCollection()
  //   .success(function(response) {
  //     $scope.collections = [];
  //     response.forEach(function(item){
  //       $scope.collections.push(item);
  //     })
  //     CollectionService.collections = $scope.collections
  //   })
  // }


  ctrl.getPlaces = function() {
    CollectionService.getOneCollection()
    .success(function(response) {
      console.log(response)
      $scope.places = [];
      response.places.forEach(function(item){
        $scope.places.push(item);
      })
      CollectionService.places = $scope.places
    })
  }



}

angular
  .module('vegfinder')
  .controller('CollectionController', CollectionController);


  //   ctrl.getplaces = function() {
  //   CollectionService.getCollection()
  //   .success(function(response) {
  //     $scope.collections = [];
  //     response.forEach(function(item){
  //       $scope.collections.push(item);
  //     })
  //     CollectionService.collections = $scope.collections
  //   })
  // }