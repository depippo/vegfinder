function Address() {
  return function (places, address) {
    console.log(address);
    return places.filter(function (place) {
      console.log(place);
      return place.address.toLowerCase().includes(address.toLowerCase());
    })
  }
}

angular
  .module('vegfinder')
  .filter('address', Address)