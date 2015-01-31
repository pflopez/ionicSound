// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicSound' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ionicSound', ['ionic','angular-momentjs','ngCordova', 'plangular'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
        controller: 'SearchCtrl'
      }
    }
  })
  .state('app.browse', {
    url: "/browse/:tag",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html",
        controller: 'BrowseCtrl'
      }
    }
  })
  .state('app.smokemachine', {
    url: "/smokemachine",
    views: {
      'menuContent': {
        templateUrl: "templates/smokemachine.html",
        controller: 'SmokeMachineCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/search');
});
