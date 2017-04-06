function PlaceController($scope, place, SearchService, PlaceService) {

  $scope.place = place.data;
  $scope.rec = null;

  var ctrl = this;


  ctrl.getMenu = function(id) {
    SearchService.getMenu(id)
    .done(function(response) {
      $scope.menus = [];
      response.response.menu.menus.items[0].entries.items.forEach(function(menu){
        $scope.menus.push(menu);
      });
      SearchService.menus = $scope.menus;
      console.log($scope.menus);
    })
  }



  ctrl.saveRec = function(id) {
    console.log("calling saverec function");
    var dish = $scope.rec;
    PlaceService.saveRec(id, dish)
    .success(function(response) {
      console.log("PlaceService.saverec done");
    })
  }


}

angular
  .module('vegfinder')
  .controller('PlaceController', PlaceController);

