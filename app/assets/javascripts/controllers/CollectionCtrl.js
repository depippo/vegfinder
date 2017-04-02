function CollectionController($scope, $http, CollectionService, SearchService) {

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


}

angular
  .module('vegfinder')
  .controller('CollectionController', CollectionController);