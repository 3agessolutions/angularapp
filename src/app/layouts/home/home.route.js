(function () {
    'use strict';
    angular
        .module('angapp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, angappStateConstants) {
        $stateProvider
            .state(angappStateConstants.home, {
                url: '/home',
                template: "<angapp-home></angapp-home>"
            });

    }
})();
