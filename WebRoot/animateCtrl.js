var module = angular
    .module('animateApp', [])
    .directive('ball', function ($defer) {
        return {
            restrict:'E',
            templateUrl: 'BasicJqueryValidation.html'
        };
    });

