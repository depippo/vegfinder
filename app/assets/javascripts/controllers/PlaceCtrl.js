function PlaceController($scope, place, SearchService, PlaceService, CollectionService, $rootScope) {
  
  var ctrl = this;
  
  $scope.menuItems = [];
  $scope.reviews = [];
  $scope.place = place.data;
  place.data.recommendations.forEach(function(rec){
    $scope.menuItems.push(rec);
  })
  place.data.reviews.forEach(function(review){
    $scope.reviews.push(review);
  })

  $scope.rec = null;
  $scope.review = null;

  $scope.containsUser = (arr, user_id) => arr.some(o => o.user.id == user_id);

  $scope.$on('update', function(event, value){
    $scope.menuItems.push(value);
    console.log("scope menu items is next")
    console.log($scope.menuItems);
    console.log($scope.place);
  })

  $scope.$on('review', function(event, value){
    $scope.reviews.push(value);
    console.log("scope reviews is next")
    console.log($scope.reviews);
    console.log($scope.place);
  })

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

  ctrl.saveRec = function(id, user) {
    console.log("calling saverec function");
    var dish = $scope.rec;
    PlaceService.saveRec(id, dish, user)
    .success(function(response) {
      $rootScope.$broadcast('update', response);
      $scope.recForm.$setPristine();
      $scope.rec = null;
    })

  }

  ctrl.saveReview = function(id, user) {
    console.log("calling savereview function");
    var content = $scope.review;
    PlaceService.saveReview(id, content, user)
    .success(function(response) {
      $rootScope.$broadcast('review', response);
      $scope.reviewForm.$setPristine();
      $scope.review = null;
    })
  }

  ctrl.saveToCollection = function(place, id){
    console.log("calling the save to collection function")
    CollectionService.saveToCollectionFromPlace(place, id)
      .success(function(response){
        console.log(response)
        alert(place.name + " has been saved to your favorites.");
      });
  }

}

angular
  .module('vegfinder')
  .controller('PlaceController', PlaceController);