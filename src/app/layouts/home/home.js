(function () {
    'use strict';

    angular
        .module ('angapp')
        .directive ('homeDirective', homeDirective);

    homeDirective.$inject = [];

    function homeDirective() {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'app/layouts/home/views/home.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();