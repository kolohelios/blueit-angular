'use strict';

angular.module('blueit')
.factory('Post', function($rootScope, $http, nodeUrl){

  function Post(){}

  Post.add = function(post){
    $http.post(nodeUrl + '/posts', post);
  };

  return Post;
});
