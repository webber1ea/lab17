var app = angular.module('reddit');

app.factory('redditFactory', function($http) {

  var posts = [];

  return {
    setJSON: setJSON,
    getJSON: getJSON
  }

  function setJSON(subReddit) {
    $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + subReddit + '.json'
    }).then(function successfulCallback(response) {
      console.log(response);
      posts = response.data.data.children;
    });
  }

  function getJSON() {
    return posts;
  }

});
