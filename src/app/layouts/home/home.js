(function () {
    'use strict';

    angular
        .module ('angapp')
        .component ('angappHome', angappHome());


    function angappHome() {
        return {
            bindings: {},
            controller: HomeController,
            controllerAs: 'home',
            templateUrl: ['$element', '$attrs', function ($element, $attrs) {
                return 'app/layouts/home/views/home.html';
            }]
        }
    }

    /** @ngInject */
    function HomeController(){
        var vm = this;
        
        init();

        function init(){

        }
    }
} ());