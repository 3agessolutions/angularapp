(function () {
    'use strict';

    angular
        .module ('angapp')
        .directive ('angappLogin', angappLogin);

    angappLogin.$inject = ['$window'];

    function angappLogin($window) {
        
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();