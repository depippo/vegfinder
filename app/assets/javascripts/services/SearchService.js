function SearchService() {

  var client_id = "0OGHHW0V3V4MVL1SD3YCOH5CZY1U1QTWWEHBHJ3OUWFFJAEI";
  var client_secret = "EJ2JW4DPSSXJXP51YCO2A3NFZG5IVX1IJ3SGK5V1AJKL5JX3";


  this.searchWithin = function(city){
    var baseUrl = "https://api.foursquare.com/v2/venues/explore?";
    var url = baseUrl + "client_id=" + client_id + "&client_secret=" + client_secret + "&v=20160815&query=vegan&venuePhotos=1&near=" + city;

    return $.getJSON(url, function(){
      console.log("success");
    })
  }

  this.getMenu = function(id){
    var baseUrl = "https://api.foursquare.com/v2/venues/";
    var url = baseUrl + id + "/menu?client_id=" + client_id + "&client_secret=" + client_secret + "&v=20160815";

    return $.getJSON(url, function(){
      console.log("success");
    })
  }

  this.getPlace = function(id){
    var baseUrl = "https://api.foursquare.com/v2/venues/";
    var url = baseUrl + id + "?client_id=" + client_id + "&client_secret=" + client_secret + "&v=20160815";

    return $.getJSON(url, function(){
      console.log("success returning getPlace");
    })
  }

}

angular
  .module('vegfinder')
  .service('SearchService', SearchService);