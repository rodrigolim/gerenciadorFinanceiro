(function () {
    'use strict';

angular.module("myApp", [
        'ngCookies',
        'ngAnimate',
        'ngSanitize',
        'ngAria',
        'ngMaterial',
        'ui.router', 
        'ui.bootstrap', 
        'ui.utils.masks',
        'ngMessages',
        'chart.js'
    ])
    .config(function ($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: './views/login.html',
                    controller: "loginCtrl as vm"
                })
                .state('register', {
                    url: '/register',
                    templateUrl: './views/register.html',
                    controller: "registerCtrl as vm"
                })                
                .state('home', {
                    url: '/home',
                    templateUrl: './views/home.html',
                    controller: "homeCtrl as vm"
                })
                .state('movimentacoesList', {
                    url: '/movimentacoes',
                    templateUrl: './views/movimentacoesList.html',
                    controller: "movimentacoesListCtrl as vm"
                })
                .state('movimentacoesCad', {
                    url: '/movimentacoes/cadastro/',
                    templateUrl: './views/movimentacoesCad.html',
                    controller: "movimentacoesCadCtrl as vm"
                })
                .state('movimentacoesEdit', {
                    url: '/movimentacoes/:id',
                    templateUrl: './views/movimentacoesCad.html',
                    controller: "movimentacoesCadCtrl as vm"
                })
                .state('categorias', {
                    url: '/categorias',
                    templateUrl: './views/categorias.html',
                    controller: "categoriasCtrl as vm"
                })
                .state('logout', {
                    url: '/login',
                    templateUrl: './views/login.html',
                    controller: "loginCtrl as vm"
                })
                .state('usuarios', {
                    url: '/usuarios',
                    templateUrl: './views/usuarios.html',
                    controller: "usuariosCtrl as vm"
                })
                .state('usuariosEdit', {
                    url: '/usuarios/:id',
                    templateUrl: './views/register.html',
                    controller: "registerCtrl as vm"
                })                                
        })

})();

