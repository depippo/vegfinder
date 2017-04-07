function PlacesController($scope, places, SearchService, PlaceService, $rootScope, $filter) {
   $scope.places = [];
   
   places.data.forEach(function(place){
    $scope.places.push(place);
   })

  $scope.search = '';

}

angular
  .module('vegfinder')
  .controller('PlacesController', PlacesController);
