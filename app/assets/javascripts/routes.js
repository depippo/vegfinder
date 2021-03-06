angular
  .module('vegfinder')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
       onEnter: function(Auth, $state){
          Auth.currentUser();
        }
      })
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchController as vm',
        onEnter: function(Auth, $state){
          Auth.currentUser();
          if(!Auth._currentUser){
            $state.go('home');
          }
        }
      })
      .state('search.details', {
        url: '/details/:id',
        templateUrl: 'views/search/details.html',
        controller: 'DetailsController as vm',
        resolve: {
          details: function($stateParams, SearchService) {
            return SearchService.getPlace($stateParams.id);
          }
        },
       onEnter: function(Auth, $state){
          Auth.currentUser();
          if(!Auth._currentUser){
            $state.go('home');
          }
        }
      })
      .state('collection', {
        url: '/collection',
        templateUrl: 'views/collection.html',
        controller: 'CollectionController as vm',
       onEnter: function(Auth, $state){
          Auth.currentUser();
          if(!Auth._currentUser){
            $state.go('home');
          }
        }
      })
      .state('place', {
        url: '/place/:id',
        templateUrl: 'views/place.html',
        controller: 'PlaceController as vm',
       onEnter: function(Auth, $state){
          Auth.currentUser();
          if(!Auth._currentUser){
            $state.go('home');
          }
        },
        resolve: {
          place: function($stateParams, CollectionService) {
            return CollectionService.getPlace($stateParams.id);
          }
        }
      })
      .state('places', {
        url: '/places',
        templateUrl: 'views/places.html',
        controller: 'PlacesController as vm',
         onEnter: function(Auth, $state){
            Auth.currentUser();
            if(!Auth._currentUser){
              $state.go('home');
            }
          },
        resolve: {
          places: function($stateParams, PlaceService) {
            return PlaceService.getPlaces();
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
    $urlRouterProvider.otherwise('/home')
  })