function PlaceController($scope, place, SearchService, PlaceService, $rootScope) {
  
  $scope.menuItems = [];
  $scope.place = place.data;
  place.data.recommendations.forEach(function(rec){
    $scope.menuItems.push(rec);
  })

  $scope.rec = null;
  $scope.$on('update', function(event, value){
    $scope.menuItems.push(value);
    console.log("scope menu items is next")
    console.log($scope.menuItems);
    console.log($scope.place);
  })

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
      $rootScope.$broadcast('update', response);
      console.log("PlaceService.saverec done");
      console.log(response);
    })
  }


}

angular
  .module('vegfinder')
  .controller('PlaceController', PlaceController);

