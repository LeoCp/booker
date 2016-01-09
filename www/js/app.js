
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.cadastrar', {
    url: '/cadastrar',
    views: {
      'tab-cadastrar': {
        templateUrl: 'views/tab-cadastrar.html',
        controller: 'CadastrarCtrl'
      }
    }
  })

  .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'views/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('tab.livroDetail',{
      url: '/home/:livroId',
      views: {
        'tab-home': {
          templateUrl: 'views/livro-detail.html',
          controller: 'livroDetailCtrl'
        }
      }
    })

  .state('tab.sobre', {
    url: '/sobre',
    views: {
      'tab-sobre': {
        templateUrl: 'views/tab-sobre.html',
        controller: 'SobreCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
