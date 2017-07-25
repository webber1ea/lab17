var app = angular.module('reddit');

app.controller('inputCtrl', function($scope, redditFactory) {

  $scope.searchSubReddit = function(subReddit) {
    redditFactory.setJSON(subReddit);
  }

});
