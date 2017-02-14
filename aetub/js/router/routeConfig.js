app.config(function ($stateProvider, $urlRouterProvider){
  
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'aetub/site/home.htm',
         controller:'homeCtrl',
    })

    .state('home.inicio', {
      url:'/inicio',
      templateUrl: 'aetub/site/inicio.htm',
    })

    .state('home.inicio.detalhes', {
      url: '/:id',
       controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.id;
        },

      })

   .state('home.leiaMais', {
      url:'/leiaMais',
      templateUrl: 'aetub/site/leiaMais.htm'
    })

    .state('portal', {
      url:'/portal',
      templateUrl: 'aetub/portal/home.htm'

    })
  $urlRouterProvider.otherwise("/home/inicio");



});
