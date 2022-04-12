(function () {
    'use strict';

angular
    .module("myApp")
    .config(['$httpProvider', httpProviderConfig])
    .config(['$mdThemingProvider', mdToastTheme]);

    httpProviderConfig.$inject = ['$httpProvider'];
    function httpProviderConfig($httpProvider) {
        $httpProvider.interceptors.push('tokenInterceptor');
        //$httpProvider.interceptors.push('ErrorMessageInterceptor');
    }

    mdToastTheme.$inject = ['ngMaterial'];
    function mdToastTheme($mdThemingProvider) {
        $mdThemingProvider.theme('error-toast');
        $mdThemingProvider.theme('success-toast');
        $mdThemingProvider.theme('warning-toast');
        $mdThemingProvider.theme('info-toast');
    };

})();

