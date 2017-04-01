function SearchService($http) {

  this.getVenues = function(city){
    var baseUrl = "https://api.foursquare.com/v2/venues/search?";
    var client_id = "0OGHHW0V3V4MVL1SD3YCOH5CZY1U1QTWWEHBHJ3OUWFFJAEI";
    var client_secret = "EJ2JW4DPSSXJXP51YCO2A3NFZG5IVX1IJ3SGK5V1AJKL5JX3";
    var url = baseUrl + "client_id=" + client_id + "&client_secret=" + client_secret + "&v=20160815&categoryId=4bf58dd8d48988d1fd941735&near=" + city;

    return $.getJSON(url, function(){
      console.log("success");
    })
  }

  this.searchWithin = function(ll){
    var baseUrl = "https://api.foursquare.com/v2/venues/explore?";
    var client_id = "0OGHHW0V3V4MVL1SD3YCOH5CZY1U1QTWWEHBHJ3OUWFFJAEI";
    var client_secret = "EJ2JW4DPSSXJXP51YCO2A3NFZG5IVX1IJ3SGK5V1AJKL5JX3";
    var url = baseUrl + "client_id=" + client_id + "&client_secret=" + client_secret + "&v=20160815&query=vegan&ll=" + ll;

    return $.getJSON(url, function(){
      console.log("success");
    })
  }

}

angular
  .module('vegfinder')
  .service('SearchService', SearchService);
