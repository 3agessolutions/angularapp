(function(){
    'use strict';

    angular
        .module('angapp')
        .config(angappConfig)

    /** @ngInject */
    function angappConfig($compileProvider, $locationProvider){
        $compileProvider.preAssignBindingsEnabled(true);
        $locationProvider.hashPrefix('');
    }

}());