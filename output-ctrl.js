var app = angular.module('reddit');

app.controller('outputCtrl', function($scope, redditFactory) {

  $scope.posts = redditFactory.getJSON();

});
