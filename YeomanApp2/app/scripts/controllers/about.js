'use strict';

/**
 * @ngdoc function
 * @name yeomanApp2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp2App
 */
angular.module('yeomanApp2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
