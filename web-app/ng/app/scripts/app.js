'use strict';

/**
 * @ngdoc overview
 * @name ngApp
 * @description
 * # ngApp
 *
 * Main module of the application.
 */
angular
  .module('quiz', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
