function PlacesController($scope, places, SearchService, PlaceService, $rootScope, $filter) {
  $scope.places = [];
  $scope.search = '';
   
   places.data.forEach(function(place){
    $scope.places.push(place);
   })

}

angular
  .module('vegfinder')
  .controller('PlacesController', PlacesController);
