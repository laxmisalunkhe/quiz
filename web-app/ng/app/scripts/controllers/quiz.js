'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the ngApp
 */
angular.module('quiz')
.controller('QuizCtrl', function ($scope, $interval, $http, $location) {

    $scope.currentQuestionId = 0;
    $scope.timerRunning = true;

    // Populating test data
    $http.get('questions.json').then(function(resp){
        $scope.questions = resp.data;
    });

    $scope.changeQuestion = function(order) {
        if (order === 'prev') {
            if ($scope.currentQuestionId !== 0) {
                $scope.currentQuestionId = $scope.currentQuestionId - 1;
            } else {
                $scope.currentQuestionId = 9;
            }
        } else {
            if ($scope.currentQuestionId !== 9) {
                $scope.currentQuestionId = $scope.currentQuestionId + 1;
            } else {
                $scope.currentQuestionId = 0;
            }
        }
    };

    $scope.submit = function() {
        var totalScore = 0
        var totalAnsweredQuestion = 0;
        // Calculating total answered question and total score
        angular.forEach($scope.questions, function(question) {
            if (question.userAnswer) {
                totalAnsweredQuestion ++;
                if (question.userAnswer === question.answer) {
                    totalScore ++;
                }
            }
        });
        $scope.quizData.questions = $scope.questions;
        $scope.quizData.totalAnsweredQuestion = totalAnsweredQuestion;
        $scope.quizData.totalScore = totalScore;
        $timeout(function(){ 
            $location.path('/summary');
        },1000);
    };

    $scope.resumeTimer = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = false;
    };

    $scope.questionCallbackTimer = function() {
        console.log('questionCallbackTimer')
        $scope.changeQuestion('next');
        $scope.$broadcast('timer-resume');
    };

    $scope.quizCallbackTimer = function() {
        $scope.stopTimer();
        $scope.startTimer();
        console.log('quizCallbackTimer')
    };

    // Added Interval for performing timeout validation for each question
    $interval( function(){ $scope.questionCallbackTimer(); }, 60000, true);

    $interval( function(){ $scope.quizCallbackTimer(); }, 3600000, true);
});
