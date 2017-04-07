(function(){
  function PlaceService($http, UserService){

    this.saveRec = function(id, dish, user){
      var url = '/api/places/' + id + '/recommendations.json'
      var recommendationObject = {
        user_id: user,
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

    this.saveReview = function(id, content, user){
      var url = '/api/places/' + id + '/reviews.json'
      var reviewObject = {
        user_id: user.id,
        content: content
      }
      console.log(reviewObject);
      return $http({
        url: url,
        method: 'PUT',
        data: {
          review: reviewObject
        }
      })
    }

    this.getPlaces = function(id){
      var url = '/api/places.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }

  }

  PlaceService.$inject = ['$http', 'UserService']

angular
  .module('vegfinder')
  .service('PlaceService', PlaceService);
}());
