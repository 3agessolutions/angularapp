(function () {
    'use strict';

    angular
        .module ('angapp')
        .component ('angappSidebar', angappSidebar());


    function angappSidebar() {
        return {
            bindings: {},
            controller: SidebarController,
            controllerAs: 'sidebar',
            templateUrl: ['$element', '$attrs', function ($element, $attrs) {
                return 'app/common/sidebar/views/sidebar.html';
            }]
        }
    }

    /** @ngInject */
    function SidebarController($state, angappStateConstants){
        var vm = this;
        
        init();

        function init(){
            $state.go(angappStateConstants.home);            
        }
    }
} ());