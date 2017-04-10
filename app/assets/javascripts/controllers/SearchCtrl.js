function SearchController($scope, $http, SearchService, CollectionService) {

  var ctrl = this;
  $scope.gPlace;

  ctrl.placeSearch = function(city) {
    SearchService.searchWithin(city)
    .done(function(response) {
      $scope.veganResults = [];
      response.response.groups[0].items.forEach(function(item){
        $scope.veganResults.push(item);
      });
      SearchService.veganResults = $scope.veganResults;
      console.log($scope.veganResults);
    })
  }

  ctrl.getCollections = function() {
    CollectionService.getCollection()
    .success(function(response) {
      $scope.collections = [];
      response.forEach(function(item){
        $scope.collections.push(item);
      })
      CollectionService.collections = $scope.collections
    })
  }

}

angular
  .module('vegfinder')
  .controller('SearchController', SearchController);