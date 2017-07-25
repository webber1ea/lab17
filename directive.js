var app = angular.module('reddit');

app.directive('redditPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'reddit.html',
    replace: false
  }
});
