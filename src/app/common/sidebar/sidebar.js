(function () {
    'use strict';

    angular
        .module ('angapp')
        .component ('angappSidebar', angappSidebar());


    function angappSidebar() {
        return {
            bindings: {},
            controller: componentController,
            controllerAs: 'sidebar',
            templateUrl: ['$element', '$attrs', function ($element, $attrs) {
                return 'app/common/sidebar/views/sidebar.html';
            }]
        }
    }

    function componentController(){
        var vm = this;
        
        init();

        function init(){

        }
    }
} ());