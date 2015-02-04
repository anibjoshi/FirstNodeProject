'use strict';

/**
 * @ngdoc function
 * @name yeomanApp2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp2App
 */
angular.module('yeomanApp2App')
  .controller('MainCtrl', function ($scope) {
    $scope.user= {
    	username:"",
    	password:""
    }

  });
