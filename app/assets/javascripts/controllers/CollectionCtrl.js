function CollectionController($scope, $http, CollectionService) {

  var ctrl = this;

  ctrl.getPlaces = function(id) {
    CollectionService.getOneCollection(id)
    .success(function(response) {
      $scope.places = [];
      response.places.forEach(function(item){
        $scope.places.push(item);
      })
    })
  }

}

angular
  .module('vegfinder')
  .controller('CollectionController', CollectionController);