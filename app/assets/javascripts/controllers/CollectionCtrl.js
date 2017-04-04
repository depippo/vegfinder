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

  ctrl.getMenu = function(id) {
    SearchService.getMenu(id)
    .done(function(response) {
      console.log(response);
      debugger;
      $scope.menu = response.response.menu.menus.items[0];
      SearchService.menu = $scope.menu;
      console.log($scope.menu);
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