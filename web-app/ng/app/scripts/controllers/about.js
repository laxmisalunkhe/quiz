'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngApp
 */
angular.module('quiz')
.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});
