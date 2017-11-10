(function () {
    'use strict';

    angular
        .module ('angapp')
        .directive ('loginDirective', loginDirective);

    loginDirective.$inject = ['$window'];

    function loginDirective($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();