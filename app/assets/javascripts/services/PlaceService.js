(function(){
  function PlaceService($http, UserService){

    this.saveRec = function(id, dish){
      var url = '/api/places/' + id + '/recommendations.json'
      var recommendationObject = {
        dish: dish
      }
      console.log(recommendationObject);
      return $http({
        url: url,
        method: 'PUT',
        data: {
          recommendation: recommendationObject
        }
      })
    }

  }

  PlaceService.$inject = ['$http', 'UserService']

angular
  .module('vegfinder')
  .service('PlaceService', PlaceService);
}());
