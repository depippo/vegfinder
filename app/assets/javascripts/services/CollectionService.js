(function(){
  function CollectionService($http, UserService){

    var places;

    this.getCollection = function(){
      var url = '/api/collections.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }

    this.getPlace = function(id){
      var url = '/api/places/' + id + '.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }


    this.getOneCollection = function(){
      var collectionId = UserService.user.collection.id
      var url = '/api/collections/' + collectionId + '.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }

    this.saveToCollection = function(item){
    var imageUrl = item.venue.photos.groups[0].items[0].prefix + '128' + item.venue.photos.groups[0].items[0].suffix;
      // var imageUrl = item.categories.icon.prefix + item.categories.icon.suffix;
      var placeObject = {
        name: item.venue.name,
        menu: item.venue.menu.url,
        address: item.venue.location.formattedAddress,
        description: item.tips[0].text,
        image: imageUrl,
        venue_id: item.venue.id
      }
      var collectionId = UserService.user.collection.id
      var url = '/api/collections/' + collectionId + '/places.json'
      return $http({
        url: url,
        method: 'PUT',
        data: {
          place: placeObject
        }
      })
    }


  }

  CollectionService.$inject = ['$http', 'UserService']

angular
  .module('vegfinder')
  .service('CollectionService', CollectionService);
}());