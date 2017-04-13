function CollectionService($http){

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

  this.getOneCollection = function(id){
    var url = '/api/collections/' + id + '.json'
    return $http({
      url: url,
      method: 'GET',
    })
  }

  this.saveToCollectionFromDetails = function(item, id){
  var imageUrl = item.venue.photos.groups[0].items[0].prefix + '128' + item.venue.photos.groups[0].items[0].suffix;
  var formattedAddress = item.venue.location.formattedAddress[0] + ", " + item.venue.location.formattedAddress[1];
  if (!item.venue.menu) {
    var venueMenu = undefined;
  }
  else {
    var venueMenu = item.venue.menu.url;
  }
  if (!item.venue.url) {
    var venueUrl = undefined;
  }
  else {
    var venueUrl = item.venue.url;
  }
    var placeObject = {
      name: item.venue.name,
      menu: venueMenu,
      url: venueUrl,
      address: formattedAddress,
      description: item.venue.tips.groups[0].items[0].text,
      image: imageUrl,
      venue_id: item.venue.id
    }
    var url = '/api/collections/' + id + '/places.json'
    return $http({
      url: url,
      method: 'PUT',
      data: {
        place: placeObject
      }
    })
  }

  this.saveToCollectionFromPlace = function(place, id){
    var url = '/api/collections/' + id + '/places.json'
    return $http({
      url: url,
      method: 'PUT',
      data: {
        place: place
      }
    })
  }

}

angular
.module('vegfinder')
.service('CollectionService', CollectionService);