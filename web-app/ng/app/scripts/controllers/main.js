'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngApp
 */
app.controller('MainCtrl', function ($scope) {

    $scope.quizData = {};
    $scope.quizData.questions = [];
    $scope.quizData.totalScore = 0;
    $scope.quizData.totalAnsweredQuestion = 0;

});

app.directive('ngConfirmClick', function() {
     return {
         link: function (scope, element, attr) {
             var msg = attr.ngConfirmClick || 'Are you sure?';
             var clickAction = attr.confirmedClick;
             element.bind('click',function () {
                     if ( window.confirm(msg) ) {
                         scope.$eval(clickAction);
                     }
                 });
             }
         };
});
