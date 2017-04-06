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
        }
      })
      .state('collection', {
        url: '/collection',
        templateUrl: 'views/collection.html',
        controller: 'CollectionController as vm',
       onEnter: function(Auth, $state){
          Auth.currentUser();
        }
      })
      .state('place', {
        url: '/place/:id',
        templateUrl: 'views/place.html',
        controller: 'PlaceController as vm',
        resolve: {
          place: function($stateParams, CollectionService) {
            return CollectionService.getPlace($stateParams.id);
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