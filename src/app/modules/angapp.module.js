(function () {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['angapp']);
    });

    angular.module('angapp', ['ui.router', 'ngMaterial']);

    
})();